<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import { formattedRupiah } from "../helper/formmatedRupiah";
export default {
  props: ["service"],
  components: {
    NavBar,
  },
  methods: {
    formatPrice(price) {
      return formattedRupiah(price);
    },

    sendData(id) {
      this.$router.push({
        name: "edit services",
        params: { id: id },
      });
    },
  },
  // mounted() {
  //   console.log(this.service, "l;l;l;l;");
  // },
};
</script>
<template>
  <div
    class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="service.imgUrl" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ service.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ formatPrice(service.price) }}
      </p>
      <a
        @click.prevent="sendData(service.id)"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Edit
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<style></style>
