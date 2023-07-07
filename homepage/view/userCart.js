import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderListCard from "../components/orderListCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { showMitraService } from "../store/action";

export default function UserCart({ navigation }) {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => {
    return state;
  });
  const { order, products } = useSelector((state) => {
    return state;
  });

  let total = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    let el = totalPrice[i];
    total += el.calculatePrice
  }
  const deviceWidth = Math.round(Dimensions.get("window").width);
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 0.5, justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 30, fontWeight: "200" }}>Your Order</Text>
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: "#DFE9F4",
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "900", fontSize: 27 }}> Total </Text>
          <View style={styles.line} />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={totalPrice}
            keyExtractor={(item) => {
              item.id;
            }}
            renderItem={({ item }) => (
              <OrderListCard data={item} navigation={navigation} />
            )}
          ></FlatList>
        </View>
      </View>
      <View
        style={{
          flex: 0.25,
          backgroundColor: "#DFE9F4",
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
        }}
      >
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Total</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Rp. {total}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
        <Button
          onPress={async () => {
            dispatch(showMitraService(order.AdministratorId));
            const value = await AsyncStorage.getItem("balance");
            const token = await AsyncStorage.getItem("access_token");
            try {
              if (total > value === true) {
                return new Error();
              } else if (total > value === false) {
                const { data } = await axios({
                  url: `https://fopy.ramais.online/user/newOrder`,
                  method: "POST",
                  headers: {
                    access_token: token,
                  },
                  data: {
                    order,
                    products,
                  },
                });
              }
              Alert.alert('Order Created')
              navigation.navigate('HomePage')
            } catch (err) {
              console.log(err);
            }
          }}
          title="ORDER"
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(90, 154, 230, 1)",
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginEnd: 10,
    marginStart: 10,
  },
});
