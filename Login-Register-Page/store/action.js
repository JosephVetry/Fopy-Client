import { BASE_URL } from "../config/api"
import axios from 'axios'

export const userLogin = (dataInput) =>{
    return async(dispatch) => {
        try {
            const { data } = await axios ({
                url : `https://fopy.ramais.online/user/login`,
                method : 'POST',
                data : dataInput
            })
            const action = {
                type : 'LoginSuccess',
                payload : data
            }
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}

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