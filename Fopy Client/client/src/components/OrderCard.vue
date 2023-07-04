<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { formattedRupiah } from "../helper/formmatedRupiah";
import { formattedDate } from "../helper/formattedDate";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const SERVER = "http://localhost:3000/admin";
export default {
  props: ["order"],
  data() {
    return {
      status: this.order.orderStatus,
      product: {},
    };
  },
  methods: {
    ...mapActions(useFopyStore, ["fetchOrderByMitra"]),
    formatPrice(price) {
      return formattedRupiah(price);
    },
    formattedDating(date) {
      return formattedDate(date);
    },
    async updateStatus() {
      try {
        const responses = { orderStatus: this.status };
        const { data } = await axios({
          method: "PATCH",
          url: `${SERVER}/orderstatus/${this.order.id}`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: responses,
        });
        console.log(data);
        await this.fetchOrderByMitra();
        this.$router.push("/services/list");
        Swal.fire(data.message);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.order.OrderDetails.map((el) => {
      this.product = el;
    });
  },
};
</script>

<template>
  <tr class="text-center">
    <!-- Cek apakah product.Service.name ada -->
    <td class="px-4 py-2" v-if="product.Service?.name">
      {{ product.Service.name }}
    </td>

    <td class="px-4 py-2" v-else>-</td>

    <!-- <td class="px-4 py-2">{{ product.Service.name }}</td> -->
    <td class="px-4 py-2">{{ order.User.username }}</td>

    <td class="px-4 py-2" v-if="product.Service?.name">
      {{ product.quantity }}
    </td>

    <td class="px-4 py-2" v-else>-</td>
    <td class="px-4 py-2">{{ formattedDating(order.orderDate) }}</td>
    <td class="px-4 py-2">
      <select v-model="status" @change.prevent="updateStatus" id="small">
        <option value="pending">pending</option>
        <option value="on progress">on progress</option>
        <option value="completed">completed</option>
      </select>
    </td>
    <td class="px-4 py-2">{{ formatPrice(order.totalPrice) }}</td>
  </tr>
</template>

<style></style>
