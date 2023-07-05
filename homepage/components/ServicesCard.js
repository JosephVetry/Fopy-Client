import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Icon, IconButton } from "@react-native-material/core";
import { useDispatch } from "react-redux";
import {showMitraService} from '../store/action'


const ServicesCard = ({data, navigation}) => {

  const dispatch = useDispatch()
  return (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.5, marginEnd : 5 }}>
          <Image
            source={{
              uri: "https://nickroberts.ninja/wp-content/uploads/2017/07/react.jpg",
            }}
            style={{
              flex: 1,
              width: "100%",
              borderRadius: 20,
              resizeMode: "contain"
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 4 }}>
            <Text style={{marginBottom : 10, marginTop : 10, fontSize : 20}}>{data.mitraName}</Text>
            <Text>{data.status}</Text>
            <Text>distance</Text>
          </View>
          <View style={{ flex: 1,  flexDirection : 'row' }}>
            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <IconButton onPress={() => {console.log('ini chat')}}  icon={<Icon name="chat" size={30}/>} style={{flex : 1}} color="black"/>
            </View>
            <View style={{flex : 1,  justifyContent : 'center', alignItems : 'center'}}>
            <IconButton onPress={() => {
              navigation.navigate('AgentDetail')
              dispatch(showMitraService(data.id))
              } } icon={<Icon name="home" size={30}/>} style={{flex : 1}} color="black"/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 39,
    backgroundColor: "#DFE9F4",
    height: 150,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#90E0EF",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    marginBottom : 20
  },
});

export default ServicesCard;
