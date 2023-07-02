<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    }
}
</script>
<template>
    <NavBar />
    <div class="container w-[90%] mx-auto">
        <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
        <div class="flex justify-between items-center">
            <h2 class="text-sm text-gray-600 font-bold tracking-wide">All Transactions</h2>
            <a href="#"
                class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">More</a>
        </div>
        <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                <p class="px-4 font-semibold">Today</p>
                <p class="px-4 text-gray-600">McDonald</p>
                <p class="px-4 tracking-wider">Cash</p>
                <p class="px-4 text-blue-600">Food</p>
                <p class="md:text-base text-gray-800 flex items-center gap-2">
                    16.90
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </p>
            </li>
        </ul>
    </div>
    </div>
</template>