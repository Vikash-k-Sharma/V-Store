<template>
    <div class="bg-white min-h-[400px] m-auto w-[100%] md:w-[80%] p-[0px_32px_32px_32px]">
        <div class="flex justify-between mt-2">

            <h1 class="text-3xl font-bold mb-5">My Wishlist</h1>

            <div class="h-[40px] w-[100px]">
                <button @click="Clear_all()"
                    class="bg-red-500 hover:bg-red-600 p-1 rounded-md text-white w-[120px] font-bold">Clear
                    all</button>
            </div>

        </div>
        <div v-if="wishlist.length === 0" class="text-center text-gray-500 text-lg">
            No items in wishlist
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">

            <div v-for="(shoe, index) in wishlist" :key="index"
                class="h-[460px] rounded-md relative overflow-hidden anim mt-3">

                <div class="h-[276px] w-full relative">
                    <div @click="removeFromWishlist(shoe)"
                        class="w-8 h-8 absolute right-2 top-2 flex justify-center items-center text-2xl cursor-pointer z-10">
                        <i class="fa-solid fa-heart text-red-500"></i>
                    </div>
                    <img :src="shoe.img" class="w-full h-full object-cover">
                </div>

                <div class="h-[40%] bg-[#dededee3] w-full p-3 overflow-hidden">
                    <h1 class="text-2xl font-[700]">{{ shoe.name }}</h1>
                    <p class="font-bold text-[12px]">{{ shoe.desc }}</p>

                    <div class="w-full h-16 mt-2 flex items-center">
                        <h2 class="text-[19px] text-green-700 font-semibold">₹{{ shoe.price }}</h2>
                        <h2 class="ml-2 text-[15px] line-through text-gray-400">{{ shoe.original }}</h2>
                        <h2 class="ml-2 text-[15px]">{{ shoe.discount }}%</h2>
                    </div>
                    <div class="w-full flex justify-between items-center">
                        <button class="bg-[#ff9f00] px-3 py-2 rounded-md text-white" @click="Cart(shoe)">Add to
                            Cart</button>
                        <button class="bg-[#f97316] px-3 py-2 rounded-md text-white" @click="buyNow(shoe)">Buy
                            Now</button>
                    </div>
                </div>

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
import router from '../router';

const wishlist = ref([])
const sure = ref(false)

onMounted(() => {
    const shoes = JSON.parse(localStorage.getItem("shoesData")) || []
    const shirts = JSON.parse(localStorage.getItem("shirtsData")) || []

    const all = [...shoes, ...shirts]

    wishlist.value = all.filter(item => item.liked)
})

const removeFromWishlist = (item) => {
    item.liked = false

    const allShoes = JSON.parse(localStorage.getItem("shoesData")) || []

    const updated = allShoes.map(shoe => {
        if (shoe.name === item.name) {
            shoe.liked = false
        }
        return shoe
    })

    localStorage.setItem("shoesData", JSON.stringify(updated))

    wishlist.value = updated.filter(i => i.liked)
}

const no = () => {
    sure.value = false
}
const yes = () => {
    localStorage.removeItem("shoesData")
    localStorage.removeItem("shirtsData")
    wishlist.value = []
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

<style></style>