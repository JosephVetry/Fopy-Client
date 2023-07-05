<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";

import MitraService from "../components/MitraService.vue";
export default {
  methods: {
    ...mapActions(useFopyStore, [
      "fetchServicesByAdmin",
      "fetchServicesByMitra",
    ]),
  },
  computed: {
    ...mapState(useFopyStore, ["allservice", "services"]),
  },
  components: {
    NavBar,

    MitraService,
  },
  data() {
    return {
      role: "",
    };
  },
  created() {
    this.role = localStorage.role;
    if (this.role === "admin") {
      this.fetchServicesByAdmin();
    } else {
      this.fetchServicesByMitra();
    }
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
          All Services
        </h2>
      </div>

      <div
        v-if="role === 'mitra'"
        class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <MitraService
          v-for="service in services"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>
