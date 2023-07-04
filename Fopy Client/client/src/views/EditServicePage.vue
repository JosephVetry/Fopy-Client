<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState, mapWritableState } from "pinia";
import NavBar from "../components/NavBar.vue";

export default {
  props: ["el", "service", "id"],
  components: {
    NavBar,
  },
  computed: {
    ...mapWritableState(useFopyStore, ["AdministratorId", "role"]),
    ...mapState(useFopyStore, ["sendidservice"]),
  },
  methods: {
    ...mapActions(useFopyStore, ["editServices", "getServiceById"]),
    doEditServices() {
      console.log("masukk");
      this.editServices(this.responses, this.$route.params.id);
    },
  },
  async created() {
    this.AdministratorId = localStorage.AdministratorId;
    await this.getServiceById(this.$route.params.id);
    this.role = localStorage.getItem("role");

    this.responses.AdministratorId = this.AdministratorId;
    this.responses.name = this.sendidservice.name;
    this.responses.price = this.sendidservice.price;
    this.responses.description = this.sendidservice.description;
    this.responses.imgUrl = this.sendidservice.imgUrl;
    this.responses.type = this.sendidservice.type;
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
        Edit Service
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="doEditServices">
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
            Edit Service
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
