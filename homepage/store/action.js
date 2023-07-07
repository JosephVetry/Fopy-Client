import { BASE_URL } from "../config/api";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";


export const fetchMitra = () =>{
    return async(dispatch)=>{
        await AsyncStorage.setItem('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbGV4MDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6IkFsZXgiLCJpYXQiOjE2ODg2NTQyNzl9.SlHqNkyWe-WtWtURVMArLoa52aoEznvxDloPK_ZAGAs")
        await AsyncStorage.setItem('balance', "250000")

        try {
            const value = await AsyncStorage.getItem('access_token')
            const { data } = await axios({
            url: 'https://fopy.ramais.online/user/getMitraByUser',
            method: 'GET',
            headers : {
                access_token : value
            }
        })
        const action = {
            type : 'fetchMitraSuccess',
            payload : data
        }
        dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

export const showMitraService = (id) =>{
    return async(dispatch) =>{
        try {
            const value = await AsyncStorage.getItem('access_token')
            const { data } = await axios({
                url : `https://fopy.ramais.online/user/getMitraService/${id}`,
                method : 'GET',
                headers : {
                    access_token : value
                }
            })
 
            const action = {
                type : 'fetchServicesFromMitraSuccess',
                payload : data
            }
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

export const showMitraProduct = (id) =>{
    return async(dispatch) =>{

    }
}

export const addUserOrder = (addForm) =>{
    return async(dispatch) =>{
try {
    const action ={
        type : 'addToCart',
        payload : addForm
    }
    dispatch(action)
} catch (err) {
    console.log(err);
}
        // kirim ke reducer add formnya 
        // action.payload.order -> userOrder
        // action.payload.products -> carts.concat()
        // ganti tombol close
        // ganti quantity jadi copy
        // untuk welcome back di ganti jadi welcome, di login page

    }
}

// export const userLogin = (dataInput) =>{
//     return async(dispatch) => {
//         try {
//             const { data } = await axios ({
//                 url : `fopy.ramaisonline/user/login`,
//                 method : 'POST',
//                 data : dataInput
//             })

//             const action = {
//                 type : 'LoginSuccess',
//                 payload : data
//             }
//             await AsyncStorage.setItem('access_token', data.accessToken)
//             // const value = await AsyncStorage.getItem('access_token')
//             useNavigation('')
//             dispatch(action)
//         } catch (err) {
//             console.log(err)
//         }
//     }
// }

export const userRegister = (dataInput) => {
    return async(dispatch)=>{
        try {
            const { data } = await axios ({
                url : `https://fopy.ramais.online/user/register`,
                method : 'POST',
                data : dataInput
            })
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
}

export const calculateTotal = (dataInput) =>{
    return async(dispatch)=>{
        try {
         const action ={
             type : 'calculateTotalOrder',
             payload : dataInput
         }
         dispatch(action)
        } catch (err) {
         console.log(err);
        }
    }
}