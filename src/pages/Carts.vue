<template>
    <div class="h-[590px] bg-gray-100 p-6">
        <div class="flex justify-around">
            <h1 class="text-3xl font-bold mb-6">🛒 Your Cart</h1>

            <div class="h-[40px] w-[100px]">
                <button @click="Clear_all()"
                    class="bg-red-500 hover:bg-red-600 p-1 rounded-md text-white w-[120px] font-bold">Clear
                    all</button>
            </div>
        </div>

        <div v-if="cartItems.length === 0" class="text-center text-gray-500">
            Your cart is empty 😢
        </div>

        <div v-else class="grid gap-5">
            <div v-for="(item, index) in cartItems" :key="index"
                class="anim1 bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <img :src="item.img" class="w-24 h-24 object-cover rounded-md" />

                    <div>
                        <h2 class="text-xl font-semibold">{{ item.name }}</h2>
                        <p class="text-sm text-gray-500">{{ item.desc }}</p>
                        <p class="text-green-600 font-bold mt-1">₹{{ item.price }}</p>
                        <div class="flex items-center gap-4">
                            <button @click="decrease" class="bg-gray-300 px-3 py-1 rounded">-</button>
                            <span class="text-lg font-semibold">{{ quantity }}</span>
                            <button @click="increase" class="bg-gray-300 px-3 py-1 rounded">+</button>
                        </div>
                    </div>
                </div>

                <button @click="removeItem(index)" class="bg-red-500 text-white px-3 py-2 rounded-md">
                    Remove
                </button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow mt-4">
                <h2 class="text-xl font-bold">
                    Total: ₹{{ totalPrice }}
                </h2>


                <button class="mt-3 bg-green-600 text-white px-5 py-2 rounded-md">
                    Checkout
                </button>
            </div>
        </div>
    </div>
    <div v-if="sure"
        class="w-full h-[654px] backdrop-blur-sm absolute top-0 left-0 z-10 flex justify-center items-center">
        <div class="bg-gray-300 w-[400px] h-[200px] rounded-lg">
            <h1 class="text-3xl text-center mt-9 p-2 font-bold">Are You Sure</h1>
            <div class="flex justify-around mt-4">
                <button @click="no()" class="bg-green-400 p-2 rounded-md w-[100px] text-white anim1">NO</button>
                <button @click="yes()" class="bg-red-500 p-2 rounded-md w-[100px] text-white anim1">YES</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import router from '../router';

const cartItems = ref([])
const sure = ref(false)

onMounted(() => {
    const data = JSON.parse(localStorage.getItem("shoe")) || []
    cartItems.value = data
})

const removeItem = (index) => {
    cartItems.value.splice(index, 1)
    localStorage.setItem("shoe", JSON.stringify(cartItems.value))
}


const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
        return total + parseInt(item.price.replace(/,/g, ""))
    }, 0)
})


const no = () => {
    sure.value = false
}
const yes = () => {
    localStorage.removeItem("shoe")

    cartItems.value = []
    no()
}
const Clear_all = () => {
    sure.value = true
}
onMounted(() => {
    const user = JSON.parse(localStorage.getItem("users"))

    if (!user) {
        router.push("/Login")
    }
})
</script>

<style>
.anim1 {
    transition: all 0.4s ease;
}

.anim1:hover {
    transform: translateY(-8px);
}
</style>