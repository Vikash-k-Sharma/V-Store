import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import buy_now from '../pages/Buy_Now.vue'
import Carts from '../pages/Carts.vue'
import PageNotFund from '../pages/PageNotFund.vue'
import wishlist from '../pages/wishlist.vue'
import Profile from '../pages/Profile.vue'
import Sign from '../pages/Sign.vue'
import Login from '../pages/Login.vue'
import Edit from '../pages/Edit.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/buy_now',
        name: 'buy_now',
        component: buy_now
    },
    {
        path: '/Carts',
        name: 'Carts',
        component: Carts
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: wishlist
    },
    {
        path: '/Sign',
        name: 'Sign',
        component: Sign
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        alias: '/Login'
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFund',
        component: PageNotFund
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router