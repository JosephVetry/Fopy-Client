import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Midtrans() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://app.sandbox.midtrans.com/snap/v3/redirection/de4e4ee3-5b53-416b-9abb-e6575f2a44d8#/payment-list' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
