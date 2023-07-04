import {
    StyleSheet, Button, View, Text, TextInput
} from 'react-native';
import { Card } from 'react-native-paper';
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';


export default function EditForm() {
    const [text, onChangeText] = React.useState('');
    const navigation = useNavigation();

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
                            Edit username
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0"
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <Text style={styles.title}>
                            Edit email
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0"
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <View style={{ alignItems: 'center', marginTop: 5 }}>
                            <Button
                                title="Confirm"
                                onPress={() => console.log('Edit successful')}
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
