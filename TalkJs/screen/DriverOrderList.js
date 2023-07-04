import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function DriverOrderList() {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: 'column',
                },
            ]}>
            {/* <View style={{ flex: 1, backgroundColor: 'red' }} /> */}
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge" style={{margin:10}}>Customer Name</Text>
                    <Text variant="titleLarge" style={{margin:10}}>Order Detail</Text>
                </Card.Content>
                {/* <Card.Cover source={{ uri: 'https://m.media-amazon.com/images/I/81Hj1wcXL-L.png' }} /> */}
                <Card.Actions>
                    <Button>Take Order</Button>
                    <Button>Cancel</Button>
                </Card.Actions>
            </Card>
            {/* <View style={{ flex: 2, backgroundColor: 'darkorange' }} /> */}
            {/* <View style={{ flex: 3, backgroundColor: 'green' }} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
