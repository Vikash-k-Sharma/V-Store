<template>
    <div class="w-full h-[580px] flex flex-col justify-center items-center bg-white text-center px-4">

        <h1 class="text-9xl font-semibold text-gray-400">404</h1>

        <p class="text-2xl mt-4 text-gray-700">
            That’s an error.
        </p>

        <p class="text-gray-500 mt-2">
            The requested page was not found.
        </p>

        <button @click="$router.push('/')"
            class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Go to Home
        </button>

    </div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>
