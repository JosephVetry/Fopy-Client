<script>
import NavBar from '../components/NavBar.vue';
export default {
  components: {
    NavBar
  },
  methods: {
    doAddDriver() {
      this.$getLocation()
      .then((data) => {
        this.responses.lat = data.lat
        this.responses.lng = data.lng
        console.log(this.responses);
      })
    }
  },
  data() {
    return {
      responses: {
        email: '',
        password: '',
        lat: 0,
        lng: 0,
        role: 'nanti pake kondisi, isinya mitra/driver',
        balance: 'tembak langsung = 0, ke server',
        status: 'tembak langsung = active',
        AdministratorId: 'pake kondisi, jika add driver maka AdministratorId = req.user.id'
      }
    }
  }
}
</script>

<template>
  <NavBar />

  <div class="flex min-h-full flex-col justify-center px-6 pb-12 lg:px-8 mt-[-3%]">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Add Drivers</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit.prevent="doAddDriver">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">

              <input v-model="responses.email" type="text" placeholder="Type here" class="input input-bordered w-full max-w-md" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input v-model="responses.password" type="password" placeholder="Type here" class="input input-bordered w-full max-w-md" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
        </div>
      </form>

    </div>
  </div>
</template>