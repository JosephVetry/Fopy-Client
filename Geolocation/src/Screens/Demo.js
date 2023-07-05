// import React, { Component, useState, useRef } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { GOOGLE_MAP_KEY } from './googleMapKey'

// export default function App() {
//   const [state, setState] = useState({
//     origin: {
//       latitude: -6.259498,
//       longitude: 106.781508,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//     destination: { 
//       latitude: -6.260670,
//       longitude: 106.781714,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }
//   })

//   const mapRef = useRef()
//   const { origin, destination } = state

//   return (
//     <View style={styles.container}>
//       <MapView
//         ref={mapRef}
//         style={StyleSheet.absoluteFill}
//         initialRegion={destination}
//       >
//         <Marker
//           coordinate={origin}
//         />
//         <Marker
//           coordinate={destination}
//         />
//         <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey={GOOGLE_MAP_KEY}
//           strokeWidth={3}
//           strokeColor='red'
//           optimizeWaypoints={true}
//           onReady={ result => {
//             mapRef.current.fitToCoordinates(result.coordinates, {
//               edgePadding: {
//                 right: 30,
//                 bottom: 300,
//                 left: 30,
//                 top: 100
//               }
//             })
//           }}
//         />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
// });
