<template>
    <div>
        <div class="row mb-3">
            <div class="col">
                <h4><i class="bi bi-door-open"></i>Habitaciones para el hotel{{this.$route.params.Name}}</h4>
               
            </div>
            <div class="col">
                <div class="float-end">
                    <button @click="viewNewRooms()" class="btn btn-success btn-sm">Crear habitacion </button>
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
            <td> {{rooms.type.name}}</td>
            <td> {{rooms.accommodation.name}}</td>
            <td> {{rooms.quantity}} </td>
            <td><button @click="viewHotelRoomUpdate(rooms.id)" class="btn btn-warning btn-sm">editar </button></td>
            <td><button @click="removeRoominHotel(rooms.id)"  class="btn btn-danger btn-sm">eleminar</button></td>
        </tr>
        </tbody>
 </table>
         <div v-if="info" class="alert alert-primary mt-3" role="alert">
        {{info}}
         </div>
    </div>
</template>
    
<script>
    import axios from 'axios'
        
        export default {
            props:['Pid','Name'],
            beforeMount() {
                axios
                    .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.Pid)
                    .then( (response) => {
                        this.data = response.data.data,
                    console.log(response);
                    } )
            },
            data() {
                return {
                    data: [],
                    info: null,
                }
            },
            
            methods: {
                viewHotelRoomUpdate(id){
                    this.$router.push({ name: 'HotelRoomsUpdate', params:{PidRoom2:id}})
                },
                viewNewRooms(){
                    this.$router.push({ name: 'HotelRoomsnewRoww'})
                },
                removeRoominHotel(id){
                    axios
                    .delete('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+id)
                    .then( (response) => {
                        
                        this.info = response.data.message
                        console.log(response);
                    this.refrestData() 
                    })         
                },
                refrestData(){
                    axios
                    .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.Pid)
                    .then( (response) => {
                        this.data = response.data.data,
                    console.log(response);
                    } )
                },

            },
        }
</script>