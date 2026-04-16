<template>
  <div class="h-[590px] bg-white flex justify-center items-center">
    <div class="w-[350px] p-5 shadow-lg rounded-lg bg-gray-100 anim">

      <img :src="product.img" class="w-full h-[300px] object-cover rounded-md">

      <h1 class="text-2xl font-bold mt-4">{{ product.name }}</h1>

      <p class="text-sm mt-2">{{ product.desc }}</p>

      <div class="flex items-center mt-3">
        <h2 class="text-green-600 text-xl font-semibold">₹{{ totalPrice }}</h2>
      </div>

      <div class="flex items-center justify-center mt-4 gap-4">
        <button @click="decrease" class="bg-gray-300 px-3 py-1 rounded">-</button>
        <span class="text-lg font-semibold">{{ quantity }}</span>
        <button @click="increase" class="bg-gray-300 px-3 py-1 rounded">+</button>
      </div>

      <button @click="Proceed()" class="w-full mt-5 bg-orange-500 text-white py-2 rounded-md">
        Proceed to Payment
      </button>

    </div>
  </div>

  <div v-if="Payment"
    class="w-full h-[654px] backdrop-blur-sm absolute top-0 left-0 z-10 flex justify-center items-center">
    <div class="bg-gray-300 w-[500px] h-[500px] rounded-lg relative">
      <div class="w-[40px] h-[40px] absolute top-0 right-0">
        <i class="fa-solid fa-xmark text-3xl cursor-pointer" @click="cancel()"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import router from '../router';
const route = useRoute()
const Payment = ref(false)

const product = {
  name: route.query.name || '',
  price: route.query.price || '0',
  img: route.query.img || '',
  desc: route.query.desc || ''
}

const quantity = ref(1)

const basePrice = Number(product.price.replace(/,/g, ''))

const totalPrice = computed(() => {
  return (basePrice * quantity.value).toLocaleString()
})

const increase = () => {
  quantity.value++
}

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
const cancel = () => {
  const result = confirm("Are you sure you want to proceed to payment?")

  if (result) {
    Payment.value = false
  } else {
    Payment.value = true
  }
}
const Proceed = () => {
  Payment.value = true
}

onMounted(() => {
  const user = JSON.parse(localStorage.getItem("users"))

  if (!user) {
    router.push("/Login")
  }
})
</script>

<style>
h1 {
  font-family: "Saira Stencil", sans-serif;
}
</style>