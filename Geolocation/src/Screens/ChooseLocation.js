// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// //reuseablescomponents
// import AddressPickup from '../components/AddressPickup';
// import CustomBtn from '../components/CustomBtn';
// import { showError, showSuccess } from '../helper/helperFunction';


// const ChooseLocation = (props) => {
//     const navigation = useNavigation();

//     const [state, setState] = useState({
//         pickupCords: {},
//         destinationCords: {},
//     });
//     const { pickupCords, destinationCords } = state;

//     const checkValid = () => {
//         if (Object.keys(pickupCords).length === 0) {
//             showError('Please enter your pickup Location');
//             return false;
//         }
//         if (Object.keys(destinationCords).length === 0) {
//             showError('Please enter your destination Location');
//             return false;
//         }
//         return true;
//     };

//     const onDone = () => {
//         const isValid = checkValid();
//         console.log('is valid?', isValid);
//         if (isValid) {
//             props.route.params.getCoordinates({
//                 pickupCords,
//                 destinationCords,
//             });
//             showSuccess('You can back now')
//             navigation.goBack();
//         }
//     };

//     const fetchAddressCords = (lat, lng) => {
//         setState({
//             ...state,
//             pickupCords: {
//                 latitude: lat,
//                 longitude: lng,
//             },
//         });
//     };

//     // const fetchDestinationCords = (lat, lng) => {
//     //     setState({
//     //         ...state,
//     //         destinationCords: {
//     //             latitude: lat,
//     //             longitude: lng,
//     //         },
//     //     });
//     // };

//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 keyboardShouldPersistTaps='handled'
//                 style={{ backgroundColor: 'white', flex: 1, padding: 24 }}
//             >
//                 <AddressPickup
//                     placeholderText='Enter Pickup Location'
//                     fetchAddress={fetchAddressCords}
//                 />
//                 <View style={{ marginBottom: 16 }} />
//                 {/* <AddressPickup
//                     placeholderText='Enter Destination Location'
//                     fetchAddress={fetchDestinationCords}
//                 /> */}
//                 <CustomBtn btnText='Search' btnStyle={{ marginTop: 24 }} onPress={onDone} />
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// });

// export default ChooseLocation;

