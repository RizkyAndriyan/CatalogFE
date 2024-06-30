import { createWebHistory, createRouter } from 'vue-router'

import Home from '../view/Home.vue'
import NotFound from '../view/NotFound.vue'
import Product from "@/pages/Product.vue";
import LandingPage from "@/pages/LandingPage.vue";
import AboutUs from "@/pages/AboutUs.vue";

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Home'
        }
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'Home Page',
                component: LandingPage
            },
            {
                path:'Product',
                name: 'Product',
                component: Product
            },
            {
                path: 'AboutUs',
                name: 'AboutUs',
                component:AboutUs
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router