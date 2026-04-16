<template>
    <div class="h-[590px] flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">

        <div class="w-[350px] bg-white p-6 rounded-xl shadow-xl">

            <h1 class="text-3xl font-bold text-center text-gray-800">Edit Profile</h1>
            <p class="text-center text-gray-500 text-sm mt-1">Update your details</p>

            <div class="flex flex-col gap-4 mt-6">

                <input type="text" placeholder="Full Name" v-model="name"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-green-400 outline-none p-2.5 rounded-md transition" />

                <input type="email" placeholder="Email Address" v-model="email"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-green-400 outline-none p-2.5 rounded-md transition" />

                <input type="password" placeholder="New Password (optional)" v-model="password"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-green-400 outline-none p-2.5 rounded-md transition" />

            </div>

            <button @click="updateProfile"
                class="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition duration-300 shadow-md hover:shadow-lg">
                Update
            </button>

            <p class="text-center text-sm text-gray-500 mt-4">
                Go back to
                <span class="text-green-600 hover:underline cursor-pointer" @click="$router.push('/')">
                    Home
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')


onMounted(async () => {

    const id = route.params.id
    const result = await axios.get(`http://localhost:3001/users/${id}`)
    name.value = result.data.name
    email.value = result.data.email


})


const updateProfile = async () => {

    const id = route.params.id

    await axios.put(`http://localhost:3001/users/${id}`, {
        name: name.value,
        email: email.value,
        password: password.value
    })

    alert("Profile Updated ✅")
    router.push('/Profile')


}
</script>
