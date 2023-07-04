<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import OrderCard from "../components/OrderCard.vue";
export default {
  components: {
    NavBar,
    OrderCard,
  },
  methods: {
    ...mapActions(useFopyStore, ["fetchOrderByMitra"]),
  },
  computed: {
    ...mapState(useFopyStore, ["orders"]),
  },
  created() {
    this.fetchOrderByMitra().then(() => {
      this.orders;
    });
  },
};
</script>
<template>
  <NavBar />
  <div class="container w-[90%] mx-auto">
    <div
      class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-sm text-gray-600 font-bold tracking-wide">
          All Transactions
        </h2>
      </div>

      <!-- <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full"></ul> -->
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Item</th>
            <th class="px-4 py-2">Customer</th>
            <th class="px-4 py-2">Quantity</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody class="divide-gray-100 overflow-x-auto w-full">
          <OrderCard v-for="order in orders" :key="order.id" :order="order" />
        </tbody>
      </table>
    </div>
  </div>
</template>
