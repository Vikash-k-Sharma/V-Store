<template>
    <div
        class="bg-white min-h-[400px] m-auto w-[100%] md:w-[80%] p-[0px_32px_32px_32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <div v-for="(shirt, index) in shirts" :key="index" class="h-[460px] anim rounded-md relative overflow-hidden">

            <div class="h-[276px] w-full relative">
                <div @click="toggleHeart(shirt)"
                    class="w-8 h-8 absolute right-2 top-2 flex justify-center items-center text-2xl cursor-pointer z-10">
                    <i :class="shirt.liked ? 'fa-solid fa-heart text-red-500' : 'fa-solid fa-heart text-white'"></i>
                </div>
                <img :src="shirt.img" class="w-full h-full object-cover">
            </div>

            <div class="h-[40%] bg-[#dededee3] w-full p-3 overflow-hidden">
                <h1 class="text-2xl font-[700]">{{ shirt.name }}</h1>
                <p class="font-bold text-[12px]">{{ shirt.desc }}</p>

                <div class="w-full h-16 mt-2 flex items-center">
                    <h2 class="text-[19px] text-green-700 font-semibold">₹{{ shirt.price }}</h2>
                    <h2 class="ml-2 text-[15px] line-through text-gray-400">{{ shirt.original }}</h2>
                    <h2 class="ml-2 text-[15px]">{{ shirt.discount }}%</h2>
                </div>

                <div class="w-full flex justify-between items-center">
                    <button class="bg-[#ff9f00] px-3 py-2 rounded-md text-white" @click="Cart(shirt)">Add to
                        Cart</button>
                    <button class="bg-[#f97316] px-3 py-2 rounded-md text-white" @click="buyNow(shirt)">
                        Buy Now
                    </button>
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

const shirts = ref([])

onMounted(() => {
    const saved = localStorage.getItem("shirtsData")

    if (saved) {
        shirts.value = JSON.parse(saved)
    } else {
        shirts.value = [
            {
                name: "Casual Cotton Shirt",
                desc: "Light blue casual cotton shirt",
                price: "1,499",
                original: "2,199",
                discount: 32,
                liked: false,
                img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Formal White Shirt",
                desc: "Office wear white shirt",
                price: "1,999",
                original: "2,799",
                discount: 28,
                liked: false,
                img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=400&q=80"
            },
            {
                name: "Checked Shirt",
                desc: "Red black checked shirt",
                price: "1,299",
                original: "1,999",
                discount: 35,
                liked: false,
                img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=400&q=80"
            }
        ]
    }
})

const toggleHeart = (item) => {
    item.liked = !item.liked
    localStorage.setItem("shirtsData", JSON.stringify(shirts.value))
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
    }, 4000)
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