import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, Pressable, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Topup from '../components/TopUp';
import EditForm from '../components/EditForm';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TopupHistory from '../components/TopUpHistory';
import OrderHistory from '../components/OrderHistory';
import axios from 'axios'

const BASE_URL = 'https://02b0-139-228-111-126.ngrok-free.app/user/getUser'
const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Profile({ route, navigation }) {

    const [getUserState, setUserState] = useState({})
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const [modalOpen, setModalOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [topupModalOpen, setTopupModalOpen] = useState(false)
    const [orderModalOpen, setOrderModalOpen] = useState(false)
    const [msg, setMsg] = useState('');

    async function getUser() {
        try {
            const value = await AsyncStorage.getItem("access_token");
            const { data } = await axios({
                url: BASE_URL,
                method: 'GET',
                headers: {
                    access_token: value
                }
            })
            // setUserState(Array.isObject(data) ? data : []);
            setUserState(data)
            console.log(data, `<<<<<<<<<<<<<<`);
            return data
        } catch (error) {
            console.log(error, `axios errro?`);
        }
    }
    useEffect(() => {
        // if (route.params) {
        //     setMsg(route.params.paymentMessage + '!');
        //     setModalVisible(true);
        //     route.params = null;
        // }
        AsyncStorage.setItem("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFsZXgwMSIsImlhdCI6MTY4ODU0MDQ5MX0.q5J6wRBxhfnMM7NjX2ni0t7EYBe92qXvtsFO_S-6uvU")
        getUser()
    }, []);


    useEffect(() => {
        if (route.params) {
            getUser()
            setMsg(route.params.paymentMessage + '!');
            setModalVisible(true);
            route.params = null;

            // Alert.alert(msg)
        }
    }, [route.params])

    if (msg) {
        return (
            <Modal animationType='slide' transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{msg}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(false);
                                setMsg('');
                            }}
                        >
                            <Button mode='contained' style={{ marginTop: 10 }}>Close</Button>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        );
    }
    return (
        <View style={[styles.container, { flexDirection: 'column', },]}>
            <View style={{ flex: 0.1, backgroundColor: '#5271FF' }} />
            <View style={{ flex: 1.5, alignItems: 'center', backgroundColor: '#5271FF', }}>
                <View style={styles.profilepicWrap}>
                    <Image style={styles.tinyLogo} source={{ uri: `https://api.dicebear.com/6.x/initials/png?seed=${getUserState.username}` }} />
                </View>
                <View key={getUserState.id}>
                    <Text style={styles.name}>{getUserState.username}</Text>
                    <Text style={styles.pos}>{getUserState.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                    <Button mode="contained" onPress={() => setEditModalOpen(true)}>Edit profile</Button>
                    <Button mode="contained" onPress={() => navigation.navigate('Chat')}>Chat</Button>
                </View>
            </View>
            <View>
                <Modal visible={editModalOpen}>
                    <View style={{ flex: 0.65, alignItems: 'center' }}>
                        <EditForm />
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Button mode="contained" onPress={() => setEditModalOpen(false)}>Back</Button>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={{ flex: 3, backgroundColor: '#caf0f8' }}>
                <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
                    <Card mode='elevated'>
                        <Card.Content>
                            <Text style={{ fontSize: 24, textAlign: 'center' }}>Balance</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center' }}>Rp. {getUserState.balance}</Text>
                        </Card.Content>
                        <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                            <Card.Actions>
                                <Button mode="contained" onPress={() => setModalOpen(true)} style={{ backgroundColor: '#89cff1' }}>Topup</Button>
                            </Card.Actions>
                        </View>
                    </Card>
                </View>
                <View>
                    <Modal visible={modalOpen}>
                        <View style={{ flex: 0.65, alignItems: 'center' }}>
                            <Topup setModalOpen={setModalOpen} />
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <Button mode="contained" onPress={() => setModalOpen(false)}>Back</Button>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                    <Button mode='contained' onPress={() => setTopupModalOpen(true)}>Topup History</Button>
                </View>
                <Modal visible={topupModalOpen} style={{ backgroundColor: 'green' }}>
                    <View style={{ alignItems: 'center' }}>
                        <TopupHistory />
                        <View style={{ marginTop: 20 }}>
                            <Button mode="contained" onPress={() => setTopupModalOpen(false)}>Back</Button>
                        </View>
                    </View>
                </Modal>
                <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                    <Button mode='contained' onPress={() => setOrderModalOpen(true)}>Order History</Button>
                </View>
                <Modal visible={orderModalOpen}>
                    <View style={{ alignItems: 'center' }}>
                        <OrderHistory />
                        <View style={{ marginTop: 20 }}>
                            <Button mode="contained" onPress={() => setOrderModalOpen(false)}>Back</Button>
                        </View>
                    </View>
                </Modal>
                <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ width: '40%', alignSelf: 'center', marginTop: 15 }}>
                        <Button mode="contained" onPress={() => console.log('Back to Home')}>
                            Back
                        </Button>
                    </View>
                    <View style={{ width: '40%', alignSelf: 'center', marginTop: 15 }}>
                        <Button mode="outlined" onPress={() => console.log('Logout')}>
                            Logout
                        </Button>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    profilepicWrap: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 8,
    },
    tinyLogo: {
        flex: 1,
        width: null,
        height: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,

    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold'
    },
    pos: {
        fontSize: 14,
        color: '#000',
        fontWeight: '300',
        fontStyle: 'italic'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // padding: 20
    },
    title: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});
