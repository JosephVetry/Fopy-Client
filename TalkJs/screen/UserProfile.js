import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, Modal } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Topup from '../components/TopUp';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Profile() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
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
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const [modalOpen, setModalOpen] = useState(false)
    
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View>
                <Modal
                    visible={modalOpen}
                >
                    <View style={{ flex: 0.6, alignItems: 'center', backgroundColor: 'grey' }}>
                        <Topup />
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Button mode="contained" onPress={() => setModalOpen(false)} >Back</Button>
                        </View>
                    </View>
                </Modal>
            </View>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={{ flex: 0.25, backgroundColor: '#90e0ef' }} />
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#90e0ef' }}>
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.tinyLogo} source={{ uri: 'https://m.media-amazon.com/images/I/81Hj1wcXL-L.png' }} />
                    </View>
                    <Text style={styles.name}>JOHN DOE USERNAME</Text>
                    <Text style={styles.pos}>USER PROFILE EMAIL</Text>
                </View>

                <View style={{ flex: 3, backgroundColor: '#caf0f8' }}>
                    <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
                        <Card mode='elevated'>
                            <Card.Content>
                                <Text style={{ fontSize: 24, textAlign: 'center' }}>Balance</Text>
                                <Text style={{ fontSize: 18, textAlign: 'center' }}>Rp. 0</Text>
                            </Card.Content>
                            <View style={{ alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
                                <Card.Actions>
                                    <Button mode="contained" onPress={() => setModalOpen(true)} style={{ backgroundColor: '#89cff1' }}>Topup</Button>
                                </Card.Actions>
                            </View>
                        </Card>
                    </View>
                    <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                        <Card mode='elevated'>
                            <Card.Content>
                                <Text style={{ fontSize: 25, textAlign: 'center' }}>History</Text>
                                <View style={{ height: 150, margin: 5 }}>
                                    <FlatList
                                        data={DATA}
                                        renderItem={({ item }) => <Item title={item.title} />}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                        <Button mode="contained" onPress={() => console.log('Back to Home')}>
                            Back
                        </Button>
                    </View>
                    <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                        <Button mode="contained" onPress={() => console.log('Logout')}>
                            Logout
                        </Button>
                    </View>
                </View>
            </ImageBackground>

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
});

// AppRegistry.registerComponent('YourApp', () => Profile); // Only needed if using AppRegistry
