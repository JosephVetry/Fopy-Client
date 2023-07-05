import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function DriverOrderList() {
    const [orders, setOrders] = React.useState([]);
  
    React.useEffect(() => {
      fetchOrders();
    }, []);
  
    const fetchOrders = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:3000/driver/orders', {
          headers: {
            access_token: accessToken,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };
  
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}
      >
        <ScrollView>
          {orders.map(order => (
            <View style={{ margin: 5 }} key={order.id}>
              <Card>
                <Card.Title title={`Order ID: ${order.id}`} left={LeftContent} />
                <Card.Content>
                  <Text variant="bodyMedium" style={{ margin: 10 }}>{order.address}</Text>
                </Card.Content>
                <Card.Actions>
                  <Button onPress={() => console.log('This goes to map')}>Take Order</Button>
                </Card.Actions>
              </Card>
            </View>
          ))}
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
