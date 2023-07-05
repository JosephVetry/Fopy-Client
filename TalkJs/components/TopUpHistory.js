import {
    StyleSheet, View, Text, ScrollView, Dimensions,
} from 'react-native';
import { Divider, Card } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'
import axios from 'axios'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BASE_URL = 'https://02b0-139-228-111-126.ngrok-free.app/user/getUser'

export default function TopupHistory() {

    const [getTopupHistoryState, setTopupHistoryState] = useState([])

    async function getTopupHistory() {
        try {
            const value = await AsyncStorage.getItem("access_token");
            const { data } = await axios({
                url: BASE_URL,
                method: 'GET',
                headers: {
                    access_token: value
                }
            })
            setTopupHistoryState(Array.isArray(data.Topups) ? data.Topups : []);
            // console.log(data);
            return data
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        AsyncStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFsZXgwMSIsImlhdCI6MTY4ODU0MDQ5MX0.q5J6wRBxhfnMM7NjX2ni0t7EYBe92qXvtsFO_S-6uvU")
        getTopupHistory()
    }, [])

    return (
        <View style={[styles.container]}>
            <View style={{ width: windowWidth }} />
            <View style={{}}>
                <Card mode='elevated'>
                    <Card.Content>
                        <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 5 }}>Topup History</Text>
                        <Divider bold={true} />
                        <View style={{ height: 300 }}>
                            <ScrollView style={{ height: 100, }} showsVerticalScrollIndicator={true}>
                                {getTopupHistoryState.map((el) => {
                                    // console.log(el);
                                    const date = moment(el.createdAt).format("MMMM D, YYYY");
                                    return (
                                        <View key={el.id} style={{ margin: 5 }}>
                                            <Text style={{ fontSize: 20 }}>Amount: Rp. {el.amount}</Text>
                                            <Text style={{ fontSize: 20 }}>Topup date: {date}</Text>
                                            <Text style={{ fontSize: 20 }}>Status: {el.status}</Text>
                                            <Divider bold={true} />
                                        </View>
                                    )
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
