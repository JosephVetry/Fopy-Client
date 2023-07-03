import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screen/Chat'
import UserProfile from './screen/UserProfile'
import Topup from './components/TopUp';
import Midtrans from './screen/Midtrans';

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
      {/* <Chat name="ChatScreen" components={Chat}/> */}
      {/* <UserProfile name="UserProfile" components={UserProfile}/> */}
      {/* <Topup name="Topup" components={Topup}/> */}
      {/* <Text>Testing 123</Text> */}
      <Stack.Navigator>
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="Midtrans" component={Midtrans}/>
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
