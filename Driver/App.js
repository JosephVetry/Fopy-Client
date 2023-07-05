import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriverLogin from './screen/DriverLogin'
import DriverOrderList from './screen/DriverOrderList'
import DriverOrderDetail from './screen/DriverOrderDetail';
import ChatComponent from './screen/DriverChat';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='DriverLogin' component={DriverLogin} />
        <Stack.Screen name='DriverOrderList' component={DriverOrderList} />
        <Stack.Screen name='DriverOrderDetail' component={DriverOrderDetail} />
        <Stack.Screen name='ChatComponent' component={ChatComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
