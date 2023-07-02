import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Chat from './screen/Chat'
import UserProfile from './screen/UserProfile'
import Topup from './components/TopUp';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Chat name="ChatScreen" components={Chat}/> */}
      <UserProfile name="UserProfile" components={UserProfile}/>
      {/* <Topup name="Topup" components={Topup}/> */}
      {/* <Text>Testing 123</Text> */}
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
