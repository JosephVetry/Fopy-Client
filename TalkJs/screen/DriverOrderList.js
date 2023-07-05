import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Divider, Avatar, Button, Card, Text } from 'react-native-paper';
import axios from 'axios'
const BASE_URL = 'https://02b0-139-228-111-126.ngrok-free.app/user/getOrder'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function DriverOrderList({ navigation }) {
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
            return data
        } catch (error) {
            console.log(error, `Order error????`);
        }
    }
    useEffect(() => {
        AsyncStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFsZXgwMSIsImlhdCI6MTY4ODU0MDQ5MX0.q5J6wRBxhfnMM7NjX2ni0t7EYBe92qXvtsFO_S-6uvU");
        getOrderHistory()
    }, [])
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <ScrollView>
                <View style={{ margin: 5 }}>
                    <Card>
                        {getOrderHistoryState.map((el) => {
                            return (
                                <View key={el.id}>
                                    {el.OrderDetails.map((order) => {
                                        return (
                                            <View key={order.id}>
                                                <Card.Title title={el.User.username} subtitle={order.Service.name} left={LeftContent} />
                                                <Card.Content>
                                                    <Text variant="bodyMedium" style={{ margin: 10 }}>Address: {el.location.coordinates}</Text>
                                                </Card.Content>
                                                <Card.Actions>
                                                    <Button mode="contained" onPress={() => navigation.navigate('DriverChat')}>Chat</Button>
                                                    <Button onPress={() => console.log('This goes to map')}>Take Order</Button>
                                                </Card.Actions>
                                                <Divider bold={true} />
                                            </View>
                                        )
                                    })}
                                </View>
                            )
                        })}
                    </Card>
                </View>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
