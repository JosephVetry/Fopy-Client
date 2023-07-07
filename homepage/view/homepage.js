import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, ImageBackground, FlatList } from "react-native";
import { carouselData } from "../assets/carouselData";
import Carousel from "../components/CarouselFile";
import ServicesCard from "../components/ServicesCard";
import { fetchMitra } from "../store/action";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage({navigation}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMitra())
  }, [])

  const { mitras } = useSelector((state =>{
    return state
  }))

  return (
    <View
      style={[ 
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0.6, }}>
        <View style={{ flex: 1, padding: 10, flexDirection: "row-reverse", backgroundColor : '#016DD7' }}>
          <View style={{ flex: 0.5}}>
            <Image
              source={{
                uri: "https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg",
              }}
              style={{
                flex: 1,
                width: "100%",
                borderRadius: 100,
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={{ flex: 4, justifyContent: "center"}}>
            <Text style={{fontWeight : '800', fontSize : 18, color : 'white'}}>
              Welcome Back, Sara
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Carousel data={carouselData} />
      </View>
      <View style={{ flex: 4, marginHorizontal: 20 }}>
        <FlatList
        showsVerticalScrollIndicator = {false}
        data = {mitras}
        keyExtractor={(item)=>{
          item.id
        }}
        renderItem={({item})=>(
          <ServicesCard data = {item} navigation={navigation}/>
        )}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#FFFF' 
  },
});
