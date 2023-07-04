import { BASE_URL } from "../config/api";
import axios from 'axios'


export const fetchMitra = () =>{
    return async(dispatch)=>{
        try {

        const { data } = await axios({
            url: 'http://10.0.2.2:3000/user/getMitraByUser',
            method: 'GET'
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
            const { data } = await axios({
                url : `http://10.0.2.2:3000/user/getMitraByUser/${id}`,
                method : 'GET'
            })
            const action ={
                type : 'fetchServicesFromMitraSuccess',
                payload : data
            }
            dispatch(action)
        } catch (err) {
            console.log(err)
        }
    }
}