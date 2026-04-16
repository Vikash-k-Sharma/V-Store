<template>
  <nav class="bg-gray-100 border-b relative">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between">

        <div class="text-xl font-semibold flex items-center">
          <img src="../assets/Black.png" class="w-[50px]" alt="">
          <h1 class="relative top-[10px] right-[10px]">.com</h1>
        </div>

        <div class="lg:hidden">
          <button @click="toggleMenu" class="text-gray-700 text-2xl">
            ☰
          </button>
        </div>

        <div class="hidden lg:flex items-center space-x-6">
          <router-link to="/" v-slot="{ isActive }">
            <span :class="navClass(isActive)">Home</span>
          </router-link>

          <router-link to="/wishlist" v-slot="{ isActive }">
            <span class="flex items-center gap-2">
              <i class="fa-regular fa-heart"></i>
              <span :class="navClass(isActive)">Wishlist</span>
            </span>
          </router-link>

          <router-link to="/Carts" v-slot="{ isActive }">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-cart-shopping"></i>
              <span :class="navClass(isActive)">Carts</span>
            </span>
          </router-link>

          <router-link to="/Profile">
            <i class="fa-solid fa-circle-user text-[24px] text-gray-600"></i>
          </router-link>
        </div>

        <div v-if="open"
          class="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-2xl flex flex-col items-center gap-4 py-6 z-50 animate-fadeIn">

          <router-link to="/" v-slot="{ isActive }" @click="closeAll">
            <span :class="navClass(isActive)">Home</span>
          </router-link>

          <router-link to="/wishlist" v-slot="{ isActive }" @click="closeAll">
            <span class="flex items-center gap-2">
              <i class="fa-regular fa-heart"></i>
              <span :class="navClass(isActive)">Wishlist</span>
            </span>
          </router-link>

          <router-link to="/Carts" v-slot="{ isActive }" @click="closeAll">
            <span class="flex items-center gap-2">
              <i class="fa-solid fa-cart-shopping"></i>
              <span :class="navClass(isActive)">Carts</span>
            </span>
          </router-link>

          <router-link to="/Profile" @click="closeAll">
            <span class="text-gray-700 flex items-center gap-2">
              <i class="fa-solid fa-circle-user text-xl"></i> Profile
            </span>
          </router-link>

        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

const toggleMenu = () => {
  open.value = !open.value
}

const closeAll = () => {
  open.value = false
}

const navClass = (isActive) => {
  return [
    isActive
      ? 'text-blue-600 border-b-2 border-blue-600'
      : 'text-gray-700 hover:text-blue-600',
    'font-medium transition-all duration-300'
  ]
}
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease;
}
</style>