<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapState(useFopyStore, ["AdministratorId", "role"]),
  },
  methods: {
    ...mapActions(useFopyStore, [
      "addService",
      "fetchServicesByMitra",
      "fetchServicesByAdmin",
    ]),

    doAddService() {
      console.log("masukk");
      this.addService(this.responses);
      // , this.responses;
    },
  },
  created() {
    this.AdministratorId = localStorage.AdministratorId;
    if (this.role === "admin") {
      this.responses.AdministratorId = null;
      this.fetchServicesByAdmin();
    } else {
      this.responses.AdministratorId = this.AdministratorId;
      this.fetchServicesByMitra();
    }
  },
  data() {
    return {
      responses: {
        AdministratorId: null,
        name: "",
        price: 0,
        description: "",
        imgUrl: "",
        type: "",
      },
      AdministratorId: null,
    };
  },
};
</script>

<template>
  <NavBar />

  <div
    class="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8 mt-[-3%]"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Add Service
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="doAddService">
        <div>
          <label
            for="text"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <input
              v-model="responses.name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-md"
            />
          </div>
        </div>

        <div>
          <label
            for="text"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Price</label
          >
          <div class="mt-2">
            <input
              v-model="responses.price"
              type="number"
              placeholder="Type here"
              class="input input-bordered w-full max-w-md"
            />
          </div>
        </div>
        <div>
          <label
            for="text"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Description</label
          >
          <div class="mt-2">
            <input
              v-model="responses.description"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-md"
            />
          </div>
        </div>

        <div>
          <label
            for="text"
            class="block text-sm font-medium leading-6 text-gray-900"
            >imgUrl</label
          >
          <div class="mt-2">
            <input
              v-model="responses.imgUrl"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-md"
            />
          </div>
        </div>

        <div>
          <label
            for="text"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Type</label
          >
          <select
            v-model="responses.type"
            class="select select-bordered w-full max-w-sm"
          >
            <option disabled selected>--- Choose ---</option>
            <option>product</option>
            <option>service</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
