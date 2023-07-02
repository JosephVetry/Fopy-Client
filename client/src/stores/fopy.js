import { defineStore } from "pinia";
import axios from 'axios'
import Swal from 'sweetalert2'

const SERVER = 'http://localhost:3000/admin'

export const useFopyStore = defineStore('fopy', {
    state: () => ({
        orders: []
    }),
    actions: {
        async login(responses) {
            try {
                const { data } = await axios({
                    url: SERVER + '/login',
                    method: 'POST',
                    data: responses
                })

                localStorage.access_token = data.access_token
                this.router.push('/')
            } catch (error) {
                console.log(error);
                Swal.fire(error.response.data.message)
            }
        },
        async addDriver(responses) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: SERVER + '/drivers/add',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: responses
                })

                console.log(data);
                this.router.push('/driver/list')
                Swal.fire('Driver has been added!')
            } catch (error) {
                console.log(error);
            }
        },
        async addService(responses) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: SERVER + '/services/add',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: responses
                })

                console.log(data);
                this.router.push('/service/list')
                Swal.fire('Driver has been added!')
            } catch (error) {
                console.log(error);
            }
        }
    }
})