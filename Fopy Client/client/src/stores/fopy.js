import { defineStore } from "pinia";
import axios from 'axios'
import Swal from 'sweetalert2'

const SERVER = 'http://localhost:3000/admin'

export const useFopyStore = defineStore('fopy', {
  state: () => ({
    orders: [],
    isLogin: false,
    services: [],
    allservice: [],
    revenues: null,
    mitras: [],
    mitraName: "",
    role: "",
    page: "editServicePage",
    sendidservice: {}
  }),
  actions: {
    async login(responses) {

      try {
        const { data } = await axios({
          url: SERVER + '/login',
          method: 'POST',
          data: responses
        })

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("mitraName", data.mitraName);
        localStorage.setItem("role", data.role);
        localStorage.setItem("id", data.id);
        localStorage.setItem("AdministratorId", data.AdministratorId)
        this.mitraName = localStorage.getItem("mitraName")
        this.role = localStorage.getItem("role");
        this.AdministratorId = localStorage.getItem("AdministratorId")
        this.isLogin = true;
        this.router.push('/')
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },
    async addMitraOrDriver(responses) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: SERVER + '/add/register',
          headers: {
            access_token: localStorage.access_token,
            role: localStorage.role
          },
          data: responses
        })
        console.log(data);
        this.router.push('/drivers/list')
        Swal.fire('Thankyou for register!')
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },
    async fetchDriverAndMitra() {

      try {
        const { data } = await axios({
          method: 'GET',
          url: SERVER + '/mitras',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.mitras = data
        console.log(data);
      } catch (error) {
        console.log(error)
        Swal.fire('Sorry there is something missing')
      }
    },
    async addService(responses) {

      try {
        const { data } = await axios({
          method: 'POST',
          url: SERVER + '/add/services',
          headers: {
            access_token: localStorage.access_token
          },
          data: responses
        })
        console.log(data);
        this.router.push('/services/list')
        Swal.fire('Service has been added!')
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },
    async fetchServicesByAdmin() {

      try {
        const { data } = await axios({
          method: 'get',
          url: SERVER + '/services',
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.allservice = data

      } catch (error) {
        console.log(error);
        Swal.fire('Sorry, cannot add your data!')
      }
    },
    async fetchServicesByMitra() {
      try {
        const { data } = await axios({
          method: 'get',
          url: SERVER + '/services/mitra',
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.services = data

      } catch (error) {
        console.log(error);
        Swal.fire('Sorry, cannot see your data!')
      }
    },
    async editServices(input, id) {

      try {
        const { data } = await axios({
          method: 'PUT',
          url: SERVER + '/editservices/' + `${id}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: input
        })
        this.router.push('/services/list')
        Swal.fire("Success Edit Data")
      } catch (error) {
        Swal.fire(responses.data.message)
        console.log(error)
      }
    },
    async fetchBalance() {
      try {
        const { data } = await axios({
          method: 'get',
          url: SERVER + '/balance',
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.revenues = data

      } catch (error) {
        console.log(error);
        Swal.fire('Sorry, cannot see your data!')
      }
    },
    async fetchOrderByMitra() {
      try {
        const { data } = await axios({
          method: 'get',
          url: SERVER + '/mitraorder',
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.orders = data

      } catch (error) {
        console.log(error);
        Swal.fire('Sorry, cannot see your data!')
      }
    },

    async getServiceById(id) {

      try {
        const { data } = await axios({
          method: 'get',
          url: SERVER + '/services/' + `${id}`,
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.sendidservice = data

      } catch (error) {
        console.log(error);
        Swal.fire('Sorry, cannot see your data!')
      }
    }

  },

})