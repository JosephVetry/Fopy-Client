import {
  StyleSheet, Button, View, SafeAreaView, Text, Image, TextInput, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';

export default function DriverLogin({ navigation }) {
  const Separator = () => <View style={styles.separator} />;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/driver/login', { email, password });
      const { id, access_token } = response.data;
      // console.log(access_token, 'access token<<<<<<<<');

      await AsyncStorage.setItem('userId', id.toString());
      await AsyncStorage.setItem('accessToken', access_token);

      navigation.navigate('DriverOrderList');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 401) {
        showAlert('Invalid email or password');
      } else {
        showAlert('An error occurred during login');
      }
    }
  };

  const showAlert = (message) => {
    Alert.alert('Login Failed', message, [{ text: 'OK' }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, { flexDirection: 'column' }]}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/fopy.png')}
        />
        <Separator />
        <Text style={styles.title}>
          Login here.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.nativeEvent.text);
          }}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.nativeEvent.text);
          }}
        />
        <View style={styles.fixToText}>
          <Button
            title="Login"
            onPress={() => {
              handleLogin();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tinyLogo: {
    width: 100,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
