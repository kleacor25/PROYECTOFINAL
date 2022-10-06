import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"


import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import InicioPage from '@/pages/InicioPage.vue'
import HotelsPage from '@/pages/HotelsPage.vue'
import HotelCreate from '@/pages/Hotels/HotelCreate.vue'
import RoomsPage from '@/pages/RoomsPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',       name:'InicioPage', component: InicioPage},
        {path: '/hotels', name:'HotelsPage', component: HotelsPage},
        {path: '/hotelcreate', name:'HotelCreate', component: HotelCreate},
        {path: '/rooms',  name:'RoomsPage',  component: RoomsPage}
    ]
})


createApp(App)
.use(router)
.mount('#app')