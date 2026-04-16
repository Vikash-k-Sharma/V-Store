<template>
    <div class="h-[590px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">

        <div class="w-[350px] bg-white p-6 rounded-xl shadow-xl">

            <h1 class="text-3xl font-bold text-center text-gray-800">Login</h1>
            <p class="text-center text-gray-500 text-sm mt-1">Sign in to continue</p>

            <div class="flex flex-col gap-4 mt-6">

                <input type="email" placeholder="Email Address" v-model="email"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-400 outline-none p-2.5 rounded-md transition" />

                <input type="password" placeholder="Password" v-model="password"
                    class="bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-400 outline-none p-2.5 rounded-md transition" />
            </div>

            <button @click="submit"
                class="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md transition duration-300 shadow-md hover:shadow-lg">
                Login
            </button>

            <p class="text-center text-sm text-gray-500 mt-4">
                Don't have an account?
                <span class="text-blue-600 hover:underline cursor-pointer" @click="$router.push('/sign')">
                    Sign Up
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

const email = ref('')
const password = ref('')

async function submit() {

    if (!email.value || !password.value) {
        alert("All fields are required")
        return
    }


    const response = await axios.get(
        `http://localhost:3001/users?email=${email.value}&password=${password.value}`
    )

    console.log(response);

    if (response.status === 200 && response.data.length > 0) {
        localStorage.setItem("users", JSON.stringify(response.data[0]))
        router.push("/")
    } else {
        alert("Invalid email or password")
    }


}

onMounted(() => {
    const user = JSON.parse(localStorage.getItem("users"))

    if (user) {
        router.push("/Profile")
    }
})
</script>