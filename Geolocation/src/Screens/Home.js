import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKey';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import { getPreciseDistance } from 'geolib';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = ({ navigation }) => {
    const [driverLocation, setDriverLocation] = useState(null);
    const [showButton, setShowButton] = useState(false)
    const [mapReady, setMapReady] = useState(false)
    const [driverDestinationLocation, setDestinationLocation] = useState({
        // INI MASIH HARDCODE
        latitude: 37.399534, 
        longitude: -122.132807
    });
    // console.log(driverDestinationLocation, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
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
                const distance = getPreciseDistance(
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    },
                    { latitude: driverDestinationLocation.latitude, longitude: driverDestinationLocation.longitude }
                );

                if(+distance <= 15 && showButton === false){
                    setShowButton(true)
                }
                if(+distance > 15 && showButton === true){
                    setShowButton(false)
                }
                console.log(distance, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ini distance');
            }, 1500);

        })();
        return () => clearInterval(interval);

    }, []);

    const mapRef = useRef();

    const onPressGoBack = () => {
        console.log('masukkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        console.log(navigation, '>>>>>>>>>>>>>>ini navigation');
        navigation.navigate('Test');
    };

    if (driverLocation === null) {
        return <Text>Choose your location</Text>;
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

export default Home;
