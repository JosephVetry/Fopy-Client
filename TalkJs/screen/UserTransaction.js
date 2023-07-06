import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_KEY } from '../constants/googleMapKey';
import * as Location from 'expo-location'; // Import the Location module

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DriverOrderDetail = ({ navigation }) => {
  const order = 2;
  const [driverLocation, setDriverLocation] = useState(null);
  const [driverDestinationLocation, setDriverDestinationLocation] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  const handleDestinationLocation = async () => {
    try {
      // Fetch driver destination location from API
      const response = await fetch(`http://localhost:3000/driver/orders/${order}`);
      const data = await response.json();
      const { coordinates } = data.location;
      setDriverDestinationLocation({
        latitude: coordinates[1],
        longitude: coordinates[0],
      });
    } catch (err) {
      console.log(err, 'Error fetching destination location');
    }
  };

  useEffect(() => {
    handleDestinationLocation();

    // Use a watchPositionAsync to continuously track driver's current location
    const watchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.watchPositionAsync({}, (newLocation) => {
        setDriverLocation({
          latitude: newLocation.coords.latitude,
          longitude: newLocation.coords.longitude,
        });
      });
    };

    watchLocation();

    return () => {
      // Clean up watchLocation on component unmount
      if (watchLocation) {
        watchLocation.remove();
      }
    };
  }, []);

  const mapRef = useRef();

  const onMapLayout = () => {
    // Fit map to coordinates once it's ready
    if (driverDestinationLocation && !mapReady) {
      mapRef.current.fitToCoordinates([driverLocation, driverDestinationLocation], {
        edgePadding: {
          right: 30,
          bottom: 300,
          left: 30,
          top: 100,
        },
      });
      setMapReady(true);
    }
  };

  const onPressGoBack = () => {
    navigation.navigate('Test');
  };

  if (driverLocation === null) {
    return <Text>Looking for your location...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topCard}>
      </View>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: driverLocation.latitude,
            longitude: driverLocation.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          onLayout={onMapLayout}
        >
          <Marker coordinate={driverLocation} />
          {driverDestinationLocation && (
            <Marker coordinate={driverDestinationLocation} />
          )}
          {driverDestinationLocation && (
            <MapViewDirections
              origin={driverLocation}
              destination={driverDestinationLocation}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={6}
              strokeColor='red'
              optimizeWaypoints={true}
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
