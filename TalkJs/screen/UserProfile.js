import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, SafeAreaView, FlatList, Item } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

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
    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <ScrollView>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={{ flex: 0.5, backgroundColor: '#90e0ef' }} />
                    <View style={{ flex: 1.3, alignItems: 'center', backgroundColor: '#90e0ef' }}>
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
                                        <Button mode="contained" onPress={() => console.log('Topup here pls')} style={{ backgroundColor: '#89cff1' }}>Topup</Button>
                                    </Card.Actions>
                                </View>
                            </Card>
                        </View>
                        <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                            <Card mode='elevated'>
                                <Card.Content>
                                    <Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: 'red' }}>History</Text>
                                    <ScrollView>
                                        <SafeAreaView>
                                            <FlatList
                                                data={DATA}
                                                renderItem={({ item }) => <Item title={item.title} />}
                                                keyExtractor={item => item.id}
                                            />
                                        </SafeAreaView>
                                    </ScrollView>
                                    {/* <ScrollView> */}
                                    {/* <View style={{ marginTop: 5, marginBottom: 5 }}>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                                <Text style={{ fontSize: 15 }}>Service name and date of purchase</Text>
                                            </View> */}
                                    {/* </ScrollView> */}
                                </Card.Content>
                            </Card>
                        </View>
                        <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                            <Button mode="contained" onPress={() => console.log('Pressed')}>
                                Back
                            </Button>
                        </View>
                        <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center', marginTop: 15 }}>
                            <Button mode="contained" onPress={() => console.log('Pressed')}>
                                Logout
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
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
        fontSize: 32,
      },
});

// AppRegistry.registerComponent('YourApp', () => Profile); // Only needed if using AppRegistry
