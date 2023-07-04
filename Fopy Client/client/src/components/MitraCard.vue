<script>
import axios from "axios";
import { mapActions } from "pinia";
import Swal from "sweetalert2";
import { useFopyStore } from "../stores/fopy";
const SERVER = "http://localhost:3000/admin";
import { formattedRupiah } from "../helper/formmatedRupiah";
export default {
  props: ["mitra"],
  methods: {
    ...mapActions(useFopyStore, ["fetchDriverAndMitra"]),
    formatPrice(price) {
      return formattedRupiah(price);
    },
    async deleteDriverOrMitra(id) {
      try {
        const { data } = await axios({
          method: "delete",
          url: `${SERVER}/delete/mitra/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        await this.fetchDriverAndMitra();
        await Swal.fire({
          title: "Succesfully deleted",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
 
    await this.fetchDriverAndMitra();
  },
};
</script>

<template>
  <tr class="text-center">
    <td class="px-4 py-2">{{ mitra.mitraName }}</td>

    <td class="px-4 py-2">{{ mitra.email }}</td>

    <td class="px-4 py-2">{{ formatPrice(mitra.balance) }}</td>
    <td class="px-4 py-2">{{ mitra.status }}</td>
    <td class="px-4 py-2">
      <button
        @click.prevent="deleteDriverOrMitra(mitra.id)"
        class="px-4 text-red-600"
      >
        delete
      </button>
    </td>
  </tr>
</template>

<style></style>
