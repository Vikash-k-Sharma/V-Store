<template>
    <div class="w-[80%] h-[100px] m-auto mt-6">
        <h2 class="uppercase font-bold ml-8 font1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">shoes</h2>
    </div>

    <shoes />

    <div class="w-[80%] h-[100px] m-auto md:mt-6 mt-0">
        <h2 class="uppercase font-bold md:mt-8 mt-8 font1 text-5xl sm:text-4xl md:text-5xl lg:text-6xl">shirts</h2>
    </div>

    <shirts />

</template>

<script setup>
import shoes from '../components/store/shoes.vue'
import shirts from '../components/store/shirts.vue';
// import { onMounted } from 'vue';
// import router from '../router';

// onMounted(() => {
//     const user = JSON.parse(localStorage.getItem("users"))

//     if (!user) {
//         router.push("/Login")
//     }
// })
</script>

<style>
.font1 {
    font-family: "Roboto Slab", serif;
}

h1 {
    font-family: "Saira Stencil", sans-serif;
}
</style>