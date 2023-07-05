import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { doc, onSnapshot }from 'firebase/firestore'
import {db } from '../../firebaseConfig'

export default function ReadData(){
    const orderId = "1"
    const [dataFire, setDataFire ] = useState()

    useEffect (() => {
        const unsub = onSnapshot(doc(db, "DriverLocation", orderId), (doc) => {
            const newLocation = doc.data()
            console.log(newLocation);
            setDataFire(newLocation)
        })
        return () => {
            unsub()
        }
    }, [])
    return (
        <View>
            <Text> test ayam goreng {
                JSON.stringify(dataFire)}</Text>
        </View>
    )
}