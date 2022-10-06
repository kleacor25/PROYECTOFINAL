<template>
    <div>
        <div class="row mb-3">
            <div class="col">
                <h4><i class="bi bi-door-open"></i>Hotel </h4>
            </div>
            <div class="col">
                <div class="float-end">
                    <button  class="btn btn-success btn-sm">Crear habitacion </button>
                </div>
            </div>
        </div>
    
        <table class="table table-striped table-bordered table-sm">
        <thead>
        <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Acomodacion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">&nbsp;</th> 
        </tr>
        </thead>
        <tbody>
        <tr v-for="rooms in data" :key="rooms.id">
            <td> {{rooms}} </td>
            <td> {{rooms}} </td>
            <td> {{rooms}} </td>
            <td><button @click="viewHotel(rooms.id)" class="btn btn-warning btn-sm">editar </button></td>
            <td><button class="btn btn-danger btn-sm">eleminar </button></td>
        </tr>
        </tbody>
    </table>
    </div>
    </template>
    
    
    <script>
    import axios from 'axios'
   
export default {
    props:['details'],
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.details)
            .then( (response) => {
                this.data = response.data.data,
            console.log(response);
            } )
    },
    data() {
        return {
            data: []
        }
    },
    methods: {
        viewHotel(id){
            
            alert(id)
        }
    },
}
    
    </script>