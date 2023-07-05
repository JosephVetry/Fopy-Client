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
                url : `http://10.0.2.2:3000/user/getMitraService/${id}`,
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

export const showMitraProduct = (id) =>{
    console.log(id)
    return async(dispatch) =>{

    }
}

export const addUserOrder = (addForm) =>{
    return async(dispatch) =>{
        console.log(addForm.products)
       
try {
  

    // console.log(data);
    console.log("Uploaded")
    const action ={
        type : 'addToCart',
        payload : addForm
    }
    // console.log(addForm, 'ini di action')

    dispatch(action)
} catch (err) {
    console.log(err, "<---");
}
        // kirim ke reducer add formnya 
        // action.payload.order -> userOrder
        // action.payload.products -> carts.concat()
        // ganti tombol close
        // ganti quantity jadi copy
        // untuk welcome back di ganti jadi welcome, di login page

    }
}
