import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function DriverOrderList() {
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
                        <Card.Title title="Customer Name" subtitle="Order Detail" left={LeftContent} />
                        <Card.Content>
                            <Text variant="bodyMedium" style={{ margin: 10 }}>Address: Jl. Arteri Pd. Indah No.7, RT.5/RW.9, Kby. Lama Sel., Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240, Indonesia</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => console.log('This goes to map')}>Take Order</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={{ margin: 5 }}>
                    <Card>
                        <Card.Title title="Customer Name" subtitle="Order Detail" left={LeftContent} />
                        <Card.Content>
                            <Text variant="titleLarge" style={{ margin: 10 }}>Delete this placeholder</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => console.log('This goes to map')}>Take Order</Button>
                        </Card.Actions>
                    </Card>
                </View>
                <View style={{ margin: 5 }}>
                    <Card>
                        <Card.Title title="Customer Name" subtitle="Order Detail" left={LeftContent} />
                        <Card.Content>
                            <Text variant="titleLarge" style={{ margin: 10 }}>Delete this placeholder</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => console.log('This goes to map')}>Take Order</Button>
                        </Card.Actions>
                    </Card>
                </View>
                {/* <View style={{ flex: 2, backgroundColor: 'darkorange' }} /> */}
                {/* <View style={{ flex: 3, backgroundColor: 'green' }} /> */}
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
