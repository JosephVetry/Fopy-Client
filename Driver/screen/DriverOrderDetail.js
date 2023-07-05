import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, Alert , TouchableOpacity} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKey';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';
import * as Location from 'expo-location';
import { getPreciseDistance } from 'geolib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { setDoc, doc, getDocs, collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebaseConfig';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DriverOrderDetail = ({ navigation, route }) => {
    const { order } = route.params

    const [driverLocation, setDriverLocation] = useState(null);
    const [showButton, setShowButton] = useState(false)
    const [mapReady, setMapReady] = useState(false)
    const [driverDestinationLocation, setDriverDestinationLocation] = useState(null);
    const [distance, setDistance] = useState(null)
    // console.log(driverDestinationLocation, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    const [errorMsg, setErrorMsg] = useState(null);


    const tambahDocRapih = async (newCoordinate) => {
        try {
            setDoc(doc(db, 'DriverLocation', order.id.toString()), {
                latitude: newCoordinate.latitude + Math.random(),
                longitude: newCoordinate.longitude + Math.random(),
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handleDestinationLocation = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const response = await axios.get('http://localhost:3000/driver/orders/' + order.id, {
              headers: {
                access_token: accessToken,
              },
            });
            setDriverDestinationLocation({
                longitude: response.data.location.coordinates[0],
                latitude: response.data.location.coordinates[1],
                
            })
        //   navigation.navigate('DriverOrderList');
        } catch (err) {
            console.log(err, "<<<< ini error");
        }
      };

    useEffect(() => {
        // kita fetch data user, ambil location, baru assign ke latitude long diatas

        // AsyncStorage.setItem('userId', id.toString());

        handleDestinationLocation()

        let interval;
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            interval = setInterval(async function () {
                let location = await Location.getCurrentPositionAsync({});
                setDriverLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
            }, 1500);

        })();

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        console.log(Number.isNaN(distance))
        if (Number.isNaN(distance)) return

        console.log("distance", distance)
        console.log("showButton", showButton)
        if(+distance <= 10 && showButton === false){
            setShowButton(true)
        }
        if(+distance > 10 && showButton === true){
            setShowButton(false)
        }
    },[distance, showButton])


    // User
    useEffect (() => {
        const unsub = onSnapshot(doc(db, "DriverLocation", order.id.toString()), (doc) => {
            const newLocation = doc.data()
            console.log(newLocation, "<<<Location user");
            // set ke state
            // setDataFire(newLocation)
        })
        return () => {
            unsub()
        }
    }, [])

    useEffect(() => {
        if (!driverLocation) return
        const newDistance = getPreciseDistance(
            {
                latitude: driverLocation.latitude,
                longitude: driverLocation.longitude
            },
            { 
                latitude: driverDestinationLocation.latitude,
                longitude: driverDestinationLocation.longitude 
            }
        );
        setDistance(newDistance)
            
        tambahDocRapih(driverLocation)
    }, [driverLocation])

    const mapRef = useRef();

    const onPressGoBack = () => {
        navigation.navigate('Test');
    };

    if (driverLocation === null) {
        return <Text>Looking for your location...</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.topCard}>
                {
                    showButton && <TouchableOpacity onPress={onPressGoBack} style={styles.inputStyle}><Text>INI ORDER DONE</Text></TouchableOpacity>
                }
            </View>
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    style={StyleSheet.absoluteFill}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        ...driverLocation,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    <Marker
                        image={imagePath.icOval}
                        coordinate={driverLocation}
                    />
                    {driverDestinationLocation && (
                        <Marker
                            image={imagePath.icGreenMarker}
                            coordinate={driverDestinationLocation}
                        />
                    )}
                    {driverDestinationLocation && (
                        <MapViewDirections
                            origin={driverLocation}
                            destination={driverDestinationLocation}
                            apikey={GOOGLE_MAP_KEY}
                            strokeWidth={6}
                            strokeColor='red'
                            optimizeWaypoints={true}
                            onReady={(result) => {
                                if(!mapReady){
                                    mapRef.current.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: 30,
                                            bottom: 300,
                                            left: 30,
                                            top: 100,
                                        },
                                    });
                                }
                                setMapReady(true)
                            }}
                        />
                    )}
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomCard: {
        backgroundColor: 'white',
        width: '100%',
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
    },
    topCard: {
        backgroundColor: 'white',
        width: '100%',
        padding: 5,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24,
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 16,
    },
});

export default DriverOrderDetail;
