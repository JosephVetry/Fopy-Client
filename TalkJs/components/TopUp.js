import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = 'https://02b0-139-228-111-126.ngrok-free.app/user/midtrans';

export default function Topup({ setModalOpen }) {
    const [number, onChangeNumber] = React.useState('');
    const navigation = useNavigation();

    async function fetchMidtrans(number) {
        try {
            const { data } = await axios({
                url: BASE_URL,
                method: 'POST',
                data: {
                    amount: number,
                },
                headers: {
                    access_token:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFsZXgwMSIsImlhdCI6MTY4ODM3Mzk1Mn0.Q-JBjYfsO0gBAGkWQJFV7aGbpW9Gt2lvFspwPEZtaN4',
                },
            });
            console.log(data, ` <<< data`);
            return data.redirect_url;
        } catch (error) {
            console.log(error, `kbhdfakfjkn <<<<s<<`);
        }
    }
    
    useEffect(() => {
        console.log(number);
    })

    return (
        <View style={[styles.container, { flexDirection: 'column', },]}>
            <View style={{ flex: 1 }} />
            <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
                <Card mode='elevated'>
                    <Card.Content>
                        <Text style={styles.title}>
                            Enter top up amount
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0"
                            onChangeText={onChangeNumber}
                            value={number}
                            keyboardType="numeric"
                        />
                        <View style={{ alignItems: 'center', marginTop: 5 }}>
                            <Button
                                title='Confirm topup'
                                onPress={() => {
                                    // gue tambahin
                                    fetchMidtrans(number).then((url) => {
                                        console.log(number, `this is number here`);
                                        console.log(url, `url di topup`);
                                        setModalOpen(false);
                                        navigation.navigate('Midtrans', { url });
                                        console.log(navigation, url, `<<< k`)
                                    });
                                }}
                            />
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
