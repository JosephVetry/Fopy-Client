import { View, Text, Button } from 'react-native'
import { setDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig'
import ReadData from './testlisterfirestore'

export default Testfirestore = () => {
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
        <View>
            <Button 
                title="send firestore with doc name"
                onPress={() => {
                    console.log(location)
                    tambahDocRapih()
                }}
            />
        <ReadData/>
        </View>
    )
}