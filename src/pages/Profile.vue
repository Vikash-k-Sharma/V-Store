<template>
    <div class="h-[590px] bg-gray-100 flex items-center justify-center v">
        <div class="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">

            <div class="flex flex-col items-center">
                <img :src="defaultAvatar" alt="Profile" class="w-24 h-24 rounded-full border-4 border-blue-500" />

                <h2 class="mt-4 text-xl font-semibold text-gray-800">
                    {{ user.name || "Guest User" }}
                </h2>
            </div>

            <div class="mt-6 space-y-3 text-gray-700">
                <p><strong>Email:</strong> {{ user.email || "Not provided" }}</p>
                <p><strong>Phone:</strong> {{ user.phone || "Not provided" }}</p>
                <p><strong>Location:</strong> {{ user.location || "India" }}</p>
            </div>

            <div class="mt-4">
                <p class="text-gray-600 text-sm">
                    {{ user.bio || "No bio available." }}
                </p>
            </div>

            <div class="mt-6 flex justify-between">
                <router-link :to="'/edit/' + user.id"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Edit Profile
                </router-link>

                <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                    Logout
                </button>
            </div>

        </div>
    </div>


    <div v-if="sure"
        class="vikash w-full h-[654px] backdrop-blur-sm absolute top-0 left-0 z-10 flex justify-center items-center">
        <div class="bg-gray-300 w-[400px] h-[200px] rounded-lg">
            <h1 class="text-3xl text-center mt-9 p-2 font-bold">Are You Sure</h1>
            <div class="flex justify-around mt-4">
                <button @click="no()" class="bg-green-400 p-2 rounded-md w-[100px] text-white">NO</button>
                <button @click="yes()" class="bg-red-500 p-2 rounded-md w-[100px] text-white">YES</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../router'

const user = ref({})
const sure = ref(false)
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

onMounted(() => {
    const users_data = JSON.parse(localStorage.getItem("users"))
    if (users_data) {
        user.value = users_data
    } else if (!users_data) {
        router.push("/login")
    }
})

const logout = () => {
    sure.value = true

}

function yes() {
    localStorage.removeItem("users")
    router.push("/login")
}
function no() {
    sure.value = false

}
</script>
<style>
.v {
    background-image: url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe");
    background-size: cover;
    background-position: center;
}
</style>