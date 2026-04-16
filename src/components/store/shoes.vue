<template>
    <div
        class=" bg-white min-h-[400px] m-auto w-[100%] md:w-[80%] p-[0px_32px_32px_32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <div v-for="(shoe, index) in shoes" :key="index" class="h-[460px] anim rounded-md relative overflow-hidden">

            <div class="h-[276px] w-full relative">
                <div @click="toggleHeart(shoe)"
                    class="w-8 h-8 absolute right-2 top-2 flex justify-center items-center text-2xl cursor-pointer transition duration-300 z-10">
                    <i :class="shoe.liked ? 'fa-solid fa-heart text-red-500' : 'fa-solid fa-heart text-white'"></i>
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
                    <button class="bg-[#f97316] px-3 py-2 rounded-md text-white" @click="buyNow(shoe)">Buy Now</button>
                </div>
            </div>

        </div>
    </div>


    <div v-if="show" class="fixed bottom-5 right-5 z-50">
        <div class="flex items-center gap-3 bg-[#1f2937] text-white px-4 py-3 rounded-xl shadow-xl min-w-[250px]">
            <div class="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full">
                <i class="fa-solid fa-check text-white text-sm"></i>
            </div>
            <p class="text-sm font-medium">
                {{ toastMsg }}
            </p>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const toastMsg = ref('')
const show = ref(false)
let timeout = null
const shoes = ref([])


onMounted(() => {
    const saved = localStorage.getItem("shoesData")

    if (saved) {
        shoes.value = JSON.parse(saved)
    } else {
        shoes.value = [
            {
                name: "Nike Dunk High",
                desc: "Yeh blue aur white color ka shoe",
                price: "10,999",
                original: "15,999",
                discount: 31,
                liked: false,
                img: "https://i.pinimg.com/736x/69/c9/be/69c9be108c12861c28d1eef9abcc4337.jpg"
            },
            {
                name: "Nike Wu-Tang",
                desc: "Beech wala yellow aur black shoe",
                price: "17,220",
                original: "22,220",
                discount: 22,
                liked: false,
                img: "https://i.pinimg.com/736x/f2/f3/a9/f2f3a94bfae8196007652197b53ebcbf.jpg"
            },
            {
                name: "Nike Air Force 1",
                desc: "low-cut hai aur isme silver rang ka Swoosh",
                price: "14,819",
                original: "19,819",
                discount: 25,
                liked: false,
                img: "https://i.pinimg.com/1200x/17/c3/7e/17c37eef4a8dbff143a6738efc28e0ec.jpg"
            },
            {
                name: "Nike Court Vision",
                desc: "Casual sneaker",
                price: "8,499",
                original: "11,999",
                discount: 29,
                liked: false,
                img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842"
            },
            {
                name: "Nike Air Max 270",
                desc: "Sporty air shoe",
                price: "13,999",
                original: "18,999",
                discount: 26,
                liked: false,
                img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
            },
            {
                name: "Nike React Vision",
                desc: "Modern design shoe",
                price: "11,299",
                original: "16,299",
                discount: 30,
                liked: false,
                img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
            },
        ]
    }
})

const toggleHeart = (item) => {
    item.liked = !item.liked
    localStorage.setItem("shoesData", JSON.stringify(shoes.value))
}

const Cart = (shoe) => {
    const obj = {
        name: shoe.name,
        desc: shoe.desc,
        price: shoe.price,
        img: shoe.img,
    }

    const arr = JSON.parse(localStorage.getItem("shoe")) || []
    arr.push(obj)
    localStorage.setItem("shoe", JSON.stringify(arr))

    toastMsg.value = `${obj.name} added to cart`
    show.value = true

    timeout = setTimeout(() => {
        show.value = false
    }, 3000)
}

const buyNow = (item) => {
    router.push({
        path: '/buy_now',
        query: {
            name: item.name,
            price: item.price,
            img: item.img,
            desc: item.desc
        }
    })
}
</script>

<style>
.toast-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.toast-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}
</style>