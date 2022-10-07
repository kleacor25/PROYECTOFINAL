<template>
    <div>
        <h3>ACTUALIZAR HABITACIÓN PARA EL HOTEL {{this.$route.params.PidRoom2}}</h3>
    
        <div class="container">
                <div>
                    <form class="row  g-3">

                        <div class="col-md-6">
                            <label for="roomtype" class="form-label">Tipo de Habitación</label>
                            <select class="form-select" id="roomtype" v-model="room.room_type_id" >
                                <option v-for="roomtype in roomtypes" :value="roomtype.id" :key="roomtype.id">{{ roomtype.name }}</option>
                            </select>
                        </div> 

                        <div class="col-md-6">
                            <label for="acomodacion" class="form-label">Acomodaciones</label>
                            <select class="form-select" id="acomodacion" v-model="room.accommodation_id" >
                                <option v-for="acomodacion in acomodaciones" :value="acomodacion.id" :key="acomodacion.id">{{ acomodacion.name }}</option>
                            </select>
                        </div> 

                        <div class="col-md-6">
                            <label for="cantidad_hab" class="form-label">CANTIDAD</label>
                            <input v-model="room.quantity" type="text" class="form-control" id="cantidad_hab">
                        </div>
                
                             

                        <div class="row g-3">
                                    <div class="col-9">
                            </div>
                
                            <div class="col-6">
                                    <button @click="sendRoom" type="submit" class="btn btn-primary ">Actualizar</button>
                            </div>
                        </div>
            
                        
                    </form>
                </div>
                <div v-if="info" class="alert alert-primary mt-3" role="alert">
                   {{info}}
            </div>
          </div>
    </div>
    
</template>
    
    
    <script>
     import axios from 'axios'
    
    export default {

 beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/show/'+this.$route.params.PidRoom2)
            .then( response => (this.room= response.data.data) )
    },
        
        data() {
            return {
               
                info: null,
                roomtypes: [
                        {
                            "id": 1,
                            "name": "JUNIOR"
                        },
                        {
                            "id": 2,
                            "name": "ESTANDAR"
                        },
                        {
                            "id": 3,
                            "name": "SUITE"
                        }
                    ],
                acomodaciones: [
                {
                            "id": 1,
                            "name": "TRIPLE"
                        },
                        {
                            "id": 2,
                            "name": "DOBLE"
                        },
                        {
                            "id": 3,
                            "name": "SENCILLA"
                        },
                        {
                            "id": 4,
                            "name": "CUADRUPLE"
                        }
                ], 
                room: {
                    hotel_id: null,
                    room_type_id: null,
                    accommodation_id:null,
                    quantity: null,
                 }
            }
        },
        methods: {
            sendRoom(){
                axios({
                    method: 'put',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.PidRoom2,
                    data: this.room,
                    responseType: 'json',
                }) 
                .then(response => {  
                    this.info = response.data.message
                    
                    this.room.hotel_id = null
                    this.room.room_type_id = null
                    this.room.accommodation_id = null
                    this.room.quantity = null              
                })
                .catch()            
            }
        },
    }
    
    </script>