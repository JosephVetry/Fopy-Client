<script>
import { useFopyStore } from "../stores/fopy";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import { Bar, Line } from "vue-chartjs";
import { formattedRupiah } from "../helper/formmatedRupiah";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Bar,
    NavBar,
    Line,
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      mitraName: "",
      role: "",
    };
  },
  computed: {
    ...mapState(useFopyStore, ["revenues", "mitraName"]),
  },
  methods: {
    ...mapActions(useFopyStore, ["fetchBalance"]),
    formatPrice(price) {
      return formattedRupiah(price);
    },
  },
  created() {
    this.fetchBalance().then(() => {
      this.revenues;
      this.mitraName = localStorage.getItem("mitraName");
      this.role = localStorage.getItem("role");
    });
  },
  watch: {
    mitraName(value) {
      localStorage.setItem("mitraName", value);
    },
    role(value) {
      localStorage.getItem("role", value);
    },
  },
};
</script>
<template>
  <body class="relative antialiased bg-gray-0">
    <NavBar />
    <!-- Start Main -->
    <main class="container mx-w-6xl mx-auto py-4">
      <div class="flex flex-col space-y-8">
        <!-- First Row -->
        <div
          class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6"
        >
          <div
            class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50"
          >
            <div class="flex flex-col space-y-6 md:h-full md:justify-between">
              <div class="flex justify-between">
                <span
                  class="text-xs text-gray-500 font-semibold uppercase tracking-wider"
                >
                  Name Account
                </span>
                <span
                  class="text-xs text-gray-500 font-semibold uppercase tracking-wider"
                >
                  Total Balance
                </span>
              </div>
              <div class="flex gap-2 md:gap-4 justify-between items-center">
                <div class="flex flex-col space-y-4">
                  <h2
                    class="text-gray-800 font-bold tracking-widest leading-tight"
                  >
                    {{ mitraName }}
                  </h2>
                  <div class="flex items-center gap-4">
                    <p class="text-lg text-gray-600 tracking-wider"></p>
                  </div>
                </div>
                <h2
                  class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider"
                >
                  <span class="md:text-xl">{{
                    formatPrice(this.revenues.totalBalance)
                  }}</span>
                </h2>
              </div>
              <div class="flex gap-2 md:gap-4">
                <a
                  href="#"
                  class="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800"
                >
                  MY PROFILE
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between"
          >
            <div class="flex flex-col">
              <p class="text-white font-bold">Your Role :</p>
              <p
                class="mt-1 text-5xl md:text-5xl text-gray-50 font-light leading-tight max-w-sm"
              >
                {{ role }}
              </p>
            </div>
            <div class="flex justify-between items-end">
              <a
                href="#"
                class="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
              >
                Learn More
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6"
        >
          <div class="col-start-1 col-end-5">
            <h2
              class="text-xs md:text-sm text-gray-800 font-bold tracking-wide"
            >
              Summary Transactions
            </h2>
          </div>
          <div
            class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6"
          >
            <div
              class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex justify-between items-center"
            >
              <div class="p-4 cursor-pointer border">
                <span class="text-xs text-gray-500 font-semibold">Daily</span>
                <h2 class="text-gray-800 font-bold tracking-wider">$ 27.80</h2>
              </div>
              <div class="p-4 cursor-pointer border">
                <span class="text-xs text-gray-500 font-semibold">Weekly</span>
                <h2 class="text-gray-800 font-bold tracking-wider">$ 192.92</h2>
              </div>
              <div class="p-4 cursor-pointer border">
                <span class="text-xs text-gray-500 font-semibold">Monthly</span>
                <h2 class="text-gray-800 font-bold tracking-wider">$ 501.10</h2>
              </div>
            </div>
            <div>
              <Line
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
                style="height: 240px"
              />
            </div>
          </div>
          <div
            class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6"
          >
            <div class="flex justify-between items-center">
              <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                Latest Transactions
              </h2>
              <a
                href="#"
                class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300"
                >More</a
              >
            </div>
            <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
              <li
                class="py-3 flex justify-between text-sm text-gray-500 font-semibold"
              >
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                  16.90
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <!-- End Main -->
  </body>
</template>

<style></style>
