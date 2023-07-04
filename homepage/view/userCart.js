import { StyleSheet, View, Text, Dimensions } from "react-native";

export default function UserCart() {
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

      <View style={{ flex: 5, backgroundColor: "#DFE9F4", borderTopEndRadius : 10, borderTopStartRadius : 10 }}>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "900", fontSize: 27 }}> Total </Text>
        <View style={styles.line} />
      </View>
      <View style ={{flex : 1, padding : 10, flexDirection : "row"}}>
          <View style ={{flex : 2, marginStart : 20}}>
            <Text>Orders</Text>
          </View>
          <View style ={{flex : 1, marginEnd : 10}}>
            <Text>Rp</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.25, backgroundColor: "#DFE9F4", borderBottomEndRadius : 10, borderBottomStartRadius : 10 }} >
      <View style ={{flex : 1.5, flexDirection : 'row', marginLeft : 10, justifyContent : 'center', alignItems : 'center'}}>
        <View style ={{flex : 1}}>
            <Text style={{fontSize : 20, fontWeight : '500'}}>Total</Text>
        </View>
        <View style ={{flex : 1}}>
            <Text style={{fontSize : 20, fontWeight : '500'}}>Rp</Text>
        </View>
      </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }} />
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
