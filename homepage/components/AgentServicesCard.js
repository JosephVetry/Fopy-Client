import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from "react-native";
import { Icon, IconButton } from "@react-native-material/core";
import { Madoka } from "react-native-textinput-effects";
import * as DocumentPicker from "expo-document-picker";
import { TextInput } from "@react-native-material/core";
import { addUserOrder } from "../store/action";
import { useDispatch } from "react-redux";
import axios from "axios";
import { calculateTotal } from "../store/action";

export default function AgentServicesCard(data) {
  const [modalVisible, setModalVisible] = useState(false);
  const [singleFile, setSingleFile] = useState(null);
  const [page, setPage] = useState({
    firstPage: 0,
    lastPage: 0,
  });
  
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0)
  const [ totalPrice, setTotalPrice] = useState({
    calculatePrice : 0,
    serviceName : ''
  })

  const [formData, setFormData] = useState({
    order: {
      AdministratorId: 0,
      location: "POINT(107.5  9278847659893 -6.942981263106864)",
      deliveryMethod: "Delivery",
    },
    products: {
      ServiceId: 0,
      quantity: 0,
      totalPage: 0,
      url: "",
    },
  });

  const submitData = () => {
    dispatch(
      addUserOrder({
        ...formData,
        order: {
          ...formData.order,
          AdministratorId: data.data.AdministratorId,
        },
        products: {
          ...formData.products,
          ServiceId: data.data.id,
          totalPage: total,
          url: singleFile,
        },
      })
    );
    dispatch(
      calculateTotal({
        ...totalPrice,
        calculatePrice : value,
        serviceName : data.data.name
      })
    )
  };

  useEffect(() => {
    let totalPage = page.lastPage - page.firstPage + 1;
    setTotal(totalPage);
    let prices = totalPage * data.data.price * formData.products.quantity
    setValue(prices)

  }, [page]);


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.modalContainer,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: "column",
            },
          ]}
        >
          <View
            style={{
              flex: 4,
              backgroundColor: "#DFE9F4",
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 20, marginTop: 10 }}>
                {data.data.name}
              </Text>
            </View>
            <TextInput
              keyboardType="numeric"
              variant="standard"
              style={{ margin: 16, borderColor: "black" }}
              placeholder="Quantity"
              onChangeText={(text) =>
                setFormData({
                  ...formData,
                  products: {
                    ...formData.products,
                    quantity: text,
                  },
                })
              }
              name="quantity"
            />
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  keyboardType="numeric"
                  variant="standard"
                  style={{ margin: 16, borderColor: "black" }}
                  placeholder="First Page"
                  value={page.firstPage}
                  onChangeText={(text) =>
                    setPage({
                      ...page,
                      firstPage: text,
                    })
                  }
                  name="firstPage"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  keyboardType="numeric"
                  variant="standard"
                  style={{ margin: 16, borderColor: "black" }}
                  placeholder="Last Page"
                  value={page.lastPage}
                  onChangeText={(text) =>
                    setPage({
                      ...page,
                      lastPage: text,
                    })
                  }
                  name="lastPage"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                DocumentPicker.getDocumentAsync({
                  type: "*/*",
                })
                  .then(async (result) => {
                    const body = new FormData();
                    body.append("upload_preset", "fopystore");
                    body.append("api_key", "129267115242897");
                    body.append("file", {
                      uri: result.uri,
                      type: result.mimeType,
                      name: result.name
                    });

                    const { data } = await axios.post(
                      "https://api.cloudinary.com/v1_1/dle6zrtgg/auto/upload",
                      body,
                    
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      }
                    );
                    setSingleFile(data.secure_url);
                  })
                  .catch((err) => {
                    console.log(err.response.data);
                  });
              }}
            >
              <Text style={styles.buttonTextStyle}>Add File</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "#DFE9F4", flex: 0.29 }}>
            <Text>*price per copy : {data.data.price}</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#DFE9F4",
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle2}>Cancel</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1 }}>
              <Pressable
                style={[styles.buttonClose]}
                onPress={() => {
                  submitData();
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle2}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          height: 75,
          backgroundColor: "#DFE9F4",
          marginTop: 12,
          borderRadius: 20,
          marginLeft: -5,
          width: deviceWidth - 22,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 20,
          position: "absolute",
        }}
      >
        <View style={{ flex: 1, borderRadius: 20 }}>
          <Text style={styles.nameFont}>{data.data.name}</Text>
          <Text style={styles.nameFont2}>type : {data.data.type}</Text>
        </View>
        <View style={{ flex: 0.25, borderRadius: 20, alignItems: "center" }}>
          <IconButton
            onPress={() => {
              setModalVisible(true);
            }}
            icon={<Icon name="plus" size={40} />}
            style={{ flex: 1 }}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    marginTop: 37,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    height: 75,
    width: deviceWidth - 20,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  nameFont: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 7,
    fontWeight : '900'
  },
  nameFont2: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "rgba(90, 154, 230, 1)",
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
  },
});
