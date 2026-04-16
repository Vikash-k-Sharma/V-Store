<template>
    <div class="fixed top-0 z-30 w-[100%]">
        <Nav />
    </div>
    <div class="h-[64px]"></div>
    <router-view />
    <div>
        <Footer v-if="$route.name !== 'Edit'" />
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        Nav,
        Footer
    }
}
</script>
