<template>
<div>
    <div class="row mb-3">
        <div class="col">
            <h4><i class="bi bi-door-open"></i>Hoteles</h4>
        </div>
        <div class="col">
            <div class="float-end">
                <button @click="viewFormHotelCreate" class="btn btn-success btn-sm">Nuevo Hotel </button>
            </div>
        </div>
    </div>

    <table class="table table-striped table-bordered table-sm">
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">NIT</th>
        <th scope="col">Nombre</th>
        <th scope="col">Dirección</th>
        <th scope="col">Ciudad</th>
        <th scope="col">Capacidad Hab</th>
        <th scope="col">&nbsp;</th>
        <th scope="col">&nbsp;</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="hotel in hotels" :key="hotel.id">
        <td> {{hotel.id}} </td>
        <td> {{hotel.nit}} </td>
        <td> {{hotel.name}} </td>
        <td> {{hotel.address}} </td>
        <td> {{hotel.city.name}} </td>
        <td> {{hotel.num_rooms}} </td>
        <td><button @click="viewHotel(hotel.id)" class="btn btn-warning btn-sm">Detalle </button></td>
        <td><button  @click="viewFormHotelNewRoom(hotel.id)" class="btn btn-success btn-sm">Habitaciones </button></td>
    </tr>
    </tbody>
</table>
</div>
</template>


<script>

import axios from 'axios'

export default {
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
            .then( (response) => {
                this.hotels = response.data.data;
                console.log(response);
            })
    },
    data() {
        return {
            hotels: [],
            num_rooms: []
        }
    },
    methods: {
        viewFormHotelCreate() {
            this.$router.push({ name: 'HotelCreate'})
        },
        viewHotel(id){

            alert(id)
        },
        viewFormHotelNewRoom(id) { 
            this.$router.push({ name: 'HotelRooms',params:{detail:id}})
        },
    },
}

</script>