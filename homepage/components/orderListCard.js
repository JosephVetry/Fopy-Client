import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Icon, IconButton } from "@react-native-material/core";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage'

const OrderListCard = ({data, navigation}) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems : 'center' }}>
            <Text style={{fontSize : 20}}>{data.serviceName}</Text>

          </View>
          <View style={{  flex: 1, alignItems : 'center' }}>
            <Text style={{fontSize : 20,}}>Rp.{data.calculatePrice}</Text>
          </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 39,
    height: 50,
    marginTop : 20,
  },
});

export default OrderListCard;
