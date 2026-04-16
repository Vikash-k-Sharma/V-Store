import { createApp } from 'vue'
import App from './App.vue'

// Router import
import router from './router'

// Tailwind CSS import
import './style.css'

createApp(App)
    .use(router)
    .mount('#app')