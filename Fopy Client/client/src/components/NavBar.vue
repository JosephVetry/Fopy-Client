<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      mitraName: "",
      title: "",
      secondTitle: "",
      thirdTitle: "",
    };
  },
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useFopyStore, ["isLogin", "role", "mitraName"]),
  },
  methods: {
    doLogout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  created() {
    if (this.role === "admin") {
      this.title = localStorage.getItem("title") || "Mitra";
      this.secondTitle = localStorage.getItem("secondTitle") || "Add Mitra";
      this.thirdTitle = localStorage.getItem("thirdTitle") || "List Mitra";
      this.mitraName = localStorage.getItem("mitraName");
    } else {
      this.title = localStorage.getItem("title") || "Drivers";
      this.secondTitle = localStorage.getItem("secondTitle") || "Add Driver";
      this.thirdTitle = localStorage.getItem("thirdTitle") || "List Driver";
      this.mitraName = localStorage.getItem("mitraName");
    }
  },
  watch: {
    // Watch for changes in title, secondTitle, and thirdTitle and store them in local storage
    title(value) {
      localStorage.setItem("title", value);
    },
    secondTitle(value) {
      localStorage.setItem("secondTitle", value);
    },
    thirdTitle(value) {
      localStorage.setItem("thirdTitle", value);
    },
    mitraName(value) {
      localStorage.setItem("mitraName", value);
    },
  },
};
</script>

<!-- Rest of the template remains the same -->

<template>
  <!-- Start Nav -->
  <nav class="p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto">
    <div class="hidden lg:flex lg:justify-between lg:items-center">
      <a href="#" class="flex items-start gap-2 group">
        <div
          class="bg-blue-600 text-white p-2 rounded-md group-hover:bg-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p class="text-sm font-light uppercase">Admin Panel
          <span class="text-base block font-bold tracking-widest"> Fopy </span>
        </p>
      </a>
      <ul class="flex items-center space-x-4 text-sm font-semibold">
        <li>
          <router-link
            class="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
            to="/"
          >
            Home
          </router-link>
        </li>
        <li class="relative" x-data="{ open: false }">
          <router-link
            class="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200 flex gap-2 items-center"
            to="/transactions/all"
          >
            Transactions
          </router-link>
        </li>

        <li class="relative" x-data="{ open: false }">
          <a
            x-on:click="open = !open"
            x-on:click.outside="open = false"
            href="#"
            class="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200 flex gap-2 items-center"
          >
            {{ title }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 stroke-current stroke-2 text-gray-800 transform duration-500 ease-in-out"
              :class="open ? 'rotate-90' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <ul
            x-cloak
            x-show="open"
            x-transition
            class="absolute top-10 left-0 bg-white p-4 rounded-md shadow overflow-hidden w-64"
          >
            <li>
              <router-link
                to="/drivers/add"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {{ secondTitle }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/drivers/list"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {{ thirdTitle }}
              </router-link>
            </li>
          </ul>
        </li>

        <li v-if="role === 'mitra'" class="relative" x-data="{ open: false }">
          <a
            x-on:click="open = !open"
            x-on:click.outside="open = false"
            href="#"
            class="px-2 xl:px-4 py-2 text-gray-600 rounded-md hover:bg-gray-200 flex gap-2 items-center"
          >
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 stroke-current stroke-2 text-gray-800 transform duration-500 ease-in-out"
              :class="open ? 'rotate-90' : ''"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <ul
            x-cloak
            x-show="open"
            x-transition
            class="absolute top-10 left-0 bg-white p-4 rounded-md shadow overflow-hidden w-64"
          >
            <li>
              <router-link
                v-if="role === 'mitra'"
                to="/services/add"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Add Service
              </router-link>
            </li>
            <li>
              <router-link
                v-if="role === 'mitra'"
                to="/services/list"
                class="p-4 block text-sm text-gray-600 rounded flex items-center gap-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                List Services
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="flex items-center gap-6">
        <li v-if="role === 'mitra'">
          <router-link to="/inbox">
            <div class="p-2 rounded hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 stroke-current text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/profile"
            class="text-sm font-sans text-gray-800 font-semibold tracking-wider"
          >
            Hi, {{ mitraName }}!
          </router-link>
        </li>
        <li>
          <a href="#" @click.prevent="doLogout">
            <div class="p-2 rounded hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 stroke-current text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div
      x-data="{ open: false }"
      class="lg:hidden relative flex justify-between w-full"
    >
      <a href="#" class="flex items-start gap-2 group">
        <div
          class="bg-blue-600 text-white p-3 rounded-md group-hover:bg-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p class="text-sm font-light uppercase">
          Dashboard
          <span class="text-base block font-bold tracking-widest"> Atom </span>
        </p>
      </a>
      <button
        x-on:click="open = !open"
        type="button"
        class="bg-gray-200 p-3 rounded-md"
      >
        <svg
          x-show="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <svg
          x-show="open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        x-show="open"
        x-transition
        class="absolute top-14 left-0 right-0 w-full bg-white rounded-md border"
      >
        <ul class="p-4">
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              My Account
            </a>
          </li>
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Transactions
            </a>
          </li>
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Cards
            </a>
          </li>
          <li class="px-4 py-2 rounded hover:bg-gray-200">
            <a href="#" class="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Offers
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Nav -->
</template>
