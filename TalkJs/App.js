import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screen/Chat'
import UserProfile from './screen/UserProfile'
import Midtrans from './screen/Midtrans';
import User2Driver from './screen/User2DriverChat';
import UserTransaction from './screen/UserTransaction';
// import DriverLogin from './screen/DriverLogin';
// import DriverOrderList from './screen/DriverOrderList';
// import DriverChat from './screen/DriverChat';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="UserProfile" component={UserProfile}  />
          <Stack.Screen name="Midtrans" component={Midtrans}  />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="User2Driver" component={User2Driver}  />
          <Stack.Screen name="UserTransaction" component={UserTransaction} />
          {/* <Stack.Screen name='DriverLogin' component={DriverLogin} />
        <Stack.Screen name='DriverOrderList' component={DriverOrderList} />
        <Stack.Screen name='DriverChat' component={DriverChat} /> */}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    // {/* </SafeAreaView> */}
  );
}
