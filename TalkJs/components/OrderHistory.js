import {
    StyleSheet, Button, View, Text, TextInput, ScrollView
} from 'react-native';
import { Card } from 'react-native-paper';
import React, { useEffect, useState } from 'react';



export default function OrderHistory() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Order History Here',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '4b81341b-4089-4327-80fd-0fd32f8a3e61',
            title: 'Fourth Item',
        },
        {
            id: '86707545-7baf-4782-9b7c-3921f0b2578b',
            title: 'Fifth Item',
        },
        {
            id: 'e4d1c79f-df38-47de-9b37-817fe67c48c5',
            title: 'Sixth Item',
        },
    ];

    return (
        <View style={[styles.container, { flexDirection: 'column', },]}>
            <View style={{ flex: 1 }} />
            <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
                <Card mode='elevated'>
                    <Card.Content>
                        <Text style={{ fontSize: 15, textAlign: 'center' }}>Order History</Text>
                        <View style={{ margin: 5, height: 100 }}>
                            <ScrollView style={{ height: 100 }} showsVerticalScrollIndicator={true}>
                                {DATA.map((el) => {
                                    return (
                                        <View key={el.id}>
                                            <Text style={{ fontSize: 20 }}>{el.title}</Text>
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
        flex: 1,

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
