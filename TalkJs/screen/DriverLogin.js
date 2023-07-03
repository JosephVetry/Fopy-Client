import {
  StyleSheet, Button, View, SafeAreaView, Text, Image, TextInput
} from 'react-native';
import React from 'react';

export default function DriverLogin({navigation}) {
  const Separator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
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
          placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <View style={styles.fixToText}>
          <Button
            title="Login"
            onPress={() => navigation.navigate('DriverOrderList')}
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
