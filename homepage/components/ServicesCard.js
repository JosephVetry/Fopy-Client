import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import { Card } from 'react-native-paper'
import { Icon, IconButton } from "@react-native-material/core";
import { useDispatch } from "react-redux";
import {showMitraService} from '../store/action'


const ServicesCard = ({data, navigation}) => {
  
  const dispatch = useDispatch()
  return (
    <View style={styles.cardContainer}>
      <Image
      source={{
        uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-blue-gradient-geometric-flat-business-card-background-image_243088.jpg'
      }}
      style={styles.backgroundImage}
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.5, marginEnd : 5 }}>
          
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 4, alignItems : 'center', marginRight : 40 }}>
            <Text style={{marginBottom : 10, marginTop : 10, fontSize : 25, fontWeight : '900'}}>{data.mitraName}</Text>
            <Text> status : {data.status}</Text>
            <Text>distance : 2km</Text>
          </View>
          <View style={{ flex: 1,  flexDirection : 'row',  }}>
            <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <IconButton onPress={() => {console.log('ini chat')}}  icon={<Icon name="chat" size={30}/>} style={{flex : 1}} color="black"/>
            </View>
            <View style={{flex : 1,  justifyContent : 'center', alignItems : 'center'}}>
            <IconButton onPress={() => {
              navigation.navigate('AgentDetail')
              dispatch(showMitraService(data.id))
              } } icon={<Icon name="arrow-right" size={30}/>} style={{flex : 1}} color="black"/>
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
    height: 150,
    backgroundColor: "#DFE9F4",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#90E0EF",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    marginBottom : 20,
    resizeMode : 'cover'
  },
  backgroundImage: {
    width: deviceWidth - 39,
    height: 150,
    borderRadius: 20,
    resizeMode: "cover",
    position : "absolute"
  },
});

export default ServicesCard;
