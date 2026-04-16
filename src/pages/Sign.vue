<template>
    <div class="h-[590px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">

        <div class="w-[350px] bg-white p-6 rounded-xl shadow-xl">

            <h1 class="text-3xl font-bold text-center text-gray-800">Create Account</h1>
            <p class="text-center text-gray-500 text-sm mt-1">Sign up to get started</p>

            <div class="flex flex-col gap-4 mt-6">

                <input type="text" placeholder="Full Name" v-model="name"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-400 outline-none p-2.5 rounded-md transition" />

                <input type="email" placeholder="Email Address" v-model="email"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-400 outline-none p-2.5 rounded-md transition" />

                <input type="password" placeholder="Password" v-model="password"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-400 outline-none p-2.5 rounded-md transition" />

            </div>

            <button @click="submit"
                class="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md transition duration-300 shadow-md hover:shadow-lg">
                Sign Up
            </button>

            <p class="text-center text-sm text-gray-500 mt-4">
                Already have an account?
                <span class="text-blue-600 hover:underline cursor-pointer" @click="$router.push('/login')">
                    Login
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

async function submit() {

    if (!name.value || !email.value || !password.value) {
        alert("All fields are required")
        return
    }

    const obj = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    const r = await axios.post("http://localhost:3001/users", obj)


    localStorage.setItem("users", JSON.stringify(r.data))
    if (r.status === 201) {
        router.push("/")
    }

}
onMounted(() => {
    const user = JSON.parse(localStorage.getItem("users"))

    if (user) {
        router.push("/Profile")
    }
})
</script>