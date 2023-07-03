import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'
const BASE_URL = 'http://localhost:3000/midtrans'

export default function Midtrans({ route }) {
  const [number, onChangeNumber] = React.useState('');
  console.log(route.params.amount);
  useEffect(() => {
    const { data } = axios.post(BASE_URL)
    onChangeNumber(data.redirect_url)
    console.log(data);
  }, [])
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
