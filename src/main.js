import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"


import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import InicioPage from '@/pages/InicioPage.vue'
import HotelsPage from '@/pages/HotelsPage.vue'
import HotelCreate from '@/pages/Hotels/HotelCreate.vue'
import RoomsPage from '@/pages/TypeRoomsPage.vue'
import HotelRoomsPage from '@/pages/Hotels/HotelRooms.vue'
import UpdateHotelRooms from '@/pages/Hotels/UpdateHotel.vue'
import HotelRoomsUpdate from '@/pages/Hotels/HotelRoomUpdate.vue'
import HotelRoomsNew from '@/pages/Hotels/HotelNewRoom.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',       name:'InicioPage', component: InicioPage},
        {path: '/hotels', name:'HotelsPage', component: HotelsPage},
        {path: '/hotelcreate', name:'HotelCreate', component: HotelCreate},
        {path: '/rooms',  name:'RoomsPage',  component: RoomsPage},
        {path: '/hptenewroom',  name:'HotelRoomsnewRoww',  component: HotelRoomsNew},
        {path: '/hotelroomsupdate/:PidRoom2',  name:'HotelRoomsUpdate',  component: HotelRoomsUpdate},
        {path: '/hotelrooms/:Pid:Name',  name:'HotelRooms',  component: HotelRoomsPage},
        {path: '/updaterooms/:PidRoom:Namehotel',  name:'UpdateHotelRooms',  component: UpdateHotelRooms}
    ]
})


createApp(App)
.use(router)
.mount('#app')