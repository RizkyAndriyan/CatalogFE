import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import Router from "@/router/index.js";

const app = createApp(App)
app.use(Router)
app.mount('#app')