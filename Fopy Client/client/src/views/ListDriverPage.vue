<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import MitraCard from "../components/MitraCard.vue";

export default {
  data() {
    return {
      subTitle: "",
      role: "", // Add the 'role' variable here
    };
  },
  components: {
    NavBar,
    MitraCard,
  },
  computed: {
    ...mapState(useFopyStore, ["mitras"]),
  },
  methods: {
    ...mapActions(useFopyStore, ["fetchDriverAndMitra"]),
  },
  created() {
    this.role = localStorage.role;
    if (this.role === "admin") {
      this.subTitle = "All Mitra";
    } else {
      this.subTitle = "All Driver";
    }
    this.fetchDriverAndMitra();
  },
  watch: {
    subTitle(value) {
      localStorage.setItem("subTitle", value);
    },
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
          {{ subTitle }}
        </h2>
      </div>
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Total Balance</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody class="divide-gray-100 overflow-x-auto w-full">
          <MitraCard v-for="mitra in mitras" :key="mitra.id" :mitra="mitra" />
        </tbody>
      </table>
    </div>
  </div>
</template>
