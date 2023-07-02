<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar
    },
    methods: {
        doAddDriver() {

        }
    },
    data() {
        return {
            responses: {
                name: '',
                price: 0,
                description: '',
                imgUrl: '',
                type: ''
            }
        }
    }
}
</script>

<template>
    <NavBar />

    <div class="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8 mt-[-3%]">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Add Services</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" @submit.prevent="doAddDriver">
                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div class="mt-2">
                        <input v-model="responses.email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-md" />
                    </div>
                </div>

                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                    <div class="mt-2">
                        <input type="number" placeholder="Type here" class="input input-bordered w-full max-w-md" />
                    </div>
                </div>

                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    <div class="mt-2">
                        <textarea class="textarea textarea-bordered w-full" placeholder="Type here"></textarea>
                    </div>
                </div>

                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
                    <div class="mt-2">
                        <input v-model="responses.email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-md" />
                    </div>
                </div>

                <div>
                    <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
                    <select class="select select-bordered w-full max-w-sm">
                        <option disabled selected>--- Choose ---</option>
                        <option>Product</option>
                        <option>Service</option>
                    </select>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
                </div>
            </form>

        </div>
    </div>
</template>