import { View, Text, Button } from 'react-native'
import { setDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import ReadData from './testlisterfirestore'

export default OrderItem = () => {
    const [location, setLocation] = useState({
        lat: '1321321321.482894',
        lng: '1000000,282',
        orderId: "1"
    })

    const tambahDocRapih = (newCoordinate) => {
        setDoc(doc(db, 'DriverLocation', location.orderId), newCoordinate)
        .then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        let interval = setInterval(() => {
            const newCoordinate = {
                lat: Math.random(),
                lng: Math.random(),
                orderId: "1"
            }
            setLocation(newCoordinate)
            tambahDocRapih(newCoordinate)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return(
        <View style={{ margin: 5 }} key={order.id}>
            <Card>
                <Card.Title title={`Order ID: ${order.id}`} left={LeftContent} />
                <Card.Content>
                <Text variant="bodyMedium" style={{ margin: 10 }}>{order.address}</Text>
                </Card.Content>
                <Card.Actions>
                <Button onPress={() => console.log('This goes to map')}>Take Order</Button>                        
                <Button onPress={() => console.log('This goes to map')}>Finish Delivery</Button>                  
                </Card.Actions>
            </Card>
        </View>
    )
}