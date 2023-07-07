import React, { useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, } from 'react-native';
import AgentServicesCard from '../components/AgentServicesCard';
import { Button } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { showMitraService } from '../store/action';
import ProductsCard from '../components/ProductCard';


export default function AgentDetail({navigation}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(showMitraService())
  }, [])

  const services = useSelector((state)=>{
    return state.services
  })

  if (services && services.length > 0) {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        {/* <Text>{JSON.stringify(services[0].Services)}</Text> */}
        <View style={styles.cardContainer} >
          <View style = {{flex : 1}}>
  
            <FlatList
            style ={{marginTop : 10}}
            showsVerticalScrollIndicator = {false}
            data = {services[0].Services}
            keyExtractor={(item)=>{
              item.id
            }}
            renderItem={({item})=>(
          <AgentServicesCard data = {item}  />
              
              )}
            >
            </FlatList>
          </View>
          {/* <View style ={{flex : 0.5}}>
            <ProductsCard />
          </View> */}
          <View style ={{flex : 0.5, justifyContent : 'center', width : 200,}}>
          <Button onPress={()=>{
            navigation.navigate('UserCart')
          }}
                title="CHECKOUT"
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#31ABF0',
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
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor : 'rgba(90, 154, 230, 1)'
  },
  cardContainer : {
    flex: 4, 
    // backgroundColor: 'white', 
    borderTopStartRadius : 20, 
    borderTopEndRadius : 20,
    alignItems : 'center'
  }
});
