import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';
import AgentServicesCard from '../components/AgentServicesCard';
import { Button } from '@rneui/themed';


export default function AgentDetail({navigation}) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2}} />
      <View style={styles.cardContainer} >
        <View style = {{flex : 1}}>
        <AgentServicesCard/>
        <AgentServicesCard/>

        </View>
        <View style ={{flex : 0.5, justifyContent : 'center', width : 200,}}>
        <Button onPress={()=>{
          navigation.navigate('UserCart')
        }}
              title="CHECKOUT"
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
              }}
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'rgba(90, 154, 230, 1)'
  },
  cardContainer : {
    flex: 4, 
    backgroundColor: 'white', 
    borderTopStartRadius : 20, 
    borderTopEndRadius : 20,
    alignItems : 'center'
  }
});
