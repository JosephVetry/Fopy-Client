import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import Home from './src/Screens/Home'
import Test from './src/Screens/Test';
import ChooseLocation from './src/Screens/ChooseLocation'
import testfirestore from './src/Screens/testfirestore';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test Firestore" component={testfirestore} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Test" component={Test} /> */}
        {/* <Stack.Screen name="ChooseLocation" component={ChooseLocation} /> */}
      </Stack.Navigator>
      <FlashMessage 
        position="top"
      />
    </NavigationContainer>
  );
}
export default App