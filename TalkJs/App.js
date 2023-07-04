import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screen/Chat'
import UserProfile from './screen/UserProfile'
import Midtrans from './screen/Midtrans';
import DriverLogin from './screen/DriverLogin';
import DriverOrderList from './screen/DriverOrderList';

const Stack = createNativeStackNavigator()
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Midtrans" component={Midtrans} />
        {/* <Stack.Screen name='DriverLogin' component={DriverLogin}/>
        <Stack.Screen name='DriverOrderList' component={DriverOrderList}/> */}
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
});
