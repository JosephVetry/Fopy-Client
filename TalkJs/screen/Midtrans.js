import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Midtrans({ route, navigation }) {
  const url = route.params.url;
  console.log(url, `url in Midtrans`);

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
