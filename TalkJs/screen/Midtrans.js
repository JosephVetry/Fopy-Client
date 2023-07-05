import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'
const BASE_URL = 'https://02b0-139-228-111-126.ngrok-free.app/user/getUser'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Midtrans({ route, navigation }) {
  const url = route.params.url;

  async function getTopupHistory() {
    const value = await AsyncStorage.getItem("access_token");
    try {
        const { data } = await axios({
            url: BASE_URL,
            method: 'GET',
            headers: {
                access_token: value
            }
        })

        console.log(data)
        return data
    } catch (error) {
        console.log(error, `midtrans error?????????????`);
    }
}

  return (
    <WebView
      style={styles.container}
      onError={() => {
        console.log(`cukuppp`);
      }}
      onLoadStart={() => {
        console.log(`wkwkwkw`);
      }}
      source={{
        uri: url,
      }}
      onNavigationStateChange={(navState) => {
        if (navState.url.includes('status_code=200')) {
         
          let firstSplit = navState.url.split('order_id=');
          let secondSplit = firstSplit[1].split('&');
          // getTopupHistory()
          navigation.navigate('UserProfile', {
            paymentMessage:
              'Pembayaran dengan id ' + secondSplit[0] + ' berhasil',
          });
          console.log('Pembayaran dengan id ' + secondSplit[0] + ' berhasil');
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
