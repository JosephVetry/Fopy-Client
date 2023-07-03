import {
    StyleSheet, Button, View, SafeAreaView, Text, Image, TextInput
} from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import React from 'react';

export default function Topup({ navigation }) {
    const Separator = () => <View style={styles.separator} />;

    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1 }} />
            <View style={{ justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
                <Card mode='elevated'>
                <Card.Content>
                <Text style={styles.title}>
                    Enter top up amount
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="0" />
                <View style={{ alignItems: 'center', marginTop: 5}}>
                    <Button
                        title="Confirm topup"
                        onPress={() => console.log('Midtrans here')}
                    />
                </View>
                </Card.Content>
                </Card>

            </View>
            {/* <View style={{ flex: 3, backgroundColor: 'green' }} /> */}
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
