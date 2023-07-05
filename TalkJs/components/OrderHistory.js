import {
    StyleSheet, View, Text, ScrollView, Dimensions
} from 'react-native';
import { Divider, Card, Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BASE_URL = 'https://756a-139-228-111-126.ngrok-free.app/user/getOrder'

export default function OrderHistory({ navigation }) {
    const [getOrderHistoryState, setOrderHistoryState] = useState([])

    async function getOrderHistory() {
        try {
            const value = await AsyncStorage.getItem("access_token");
            const { data } = await axios({
                url: BASE_URL,
                method: 'GET',
                headers: {
                    access_token: value
                }
            })
            setOrderHistoryState(Array.isArray(data) ? data : []);
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        AsyncStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFsZXgwMSIsImlhdCI6MTY4ODU0MDQ5MX0.q5J6wRBxhfnMM7NjX2ni0t7EYBe92qXvtsFO_S-6uvU");
        getOrderHistory()
    }, [])
    return (
        <View style={[styles.container]}>
            <View style={{ width: windowWidth }} />
            <View >
                <Card mode='elevated'>
                    <Card.Content>
                        <Text style={{ fontSize: 30, textAlign: 'center' }}>Order History</Text>
                        <Divider bold={true} />
                        <View style={{ margin: 5, height: 300 }}>
                            <ScrollView style={{ height: 100 }} showsVerticalScrollIndicator={true}>
                                {getOrderHistoryState.map((el) => {
                                    // console.log(el);
                                    return (
                                        <View key={el.id}>
                                            <Text style={{ fontSize: 20 }}>{el.title}</Text>
                                            {el.OrderDetails.map((order) => (
                                                <View key={order.id}>
                                                    <Text>Order ID: {order.OrderId}</Text>
                                                    <Text>Service Name: {order.Service.name}</Text>
                                                    <Text>Quantity: {order.quantity}</Text>
                                                    <Text>Price: {el.totalPrice}</Text>
                                                    <Text>Description: {order.Service.description}</Text>
                                                    <Text>Order Status: {el.orderStatus}</Text>
                                                    {/* Render other properties as needed */}
                                                    {console.log(el, `<<<<<<<<<<<`)}
                                                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'center' }}>
                                                        <Button mode="contained" onPress={() => { }}>Track</Button>
                                                        <Button mode="contained" onPress={() => navigation.navigate('User2Driver')}>Chat</Button>
                                                    </View>

                                                </View>
                                            ))}
                                            <Divider />
                                        </View>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
