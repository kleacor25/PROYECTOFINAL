<template>
    <div>
        <h3>Actulizar datos del Holtel {{this.$route.params.Namehotel}}</h3>
    
        <div class="">
            <div class="row  mt-3">
                <div class="col">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input v-model="hotel.name" type="text" class="form-control" id="nombre">
                    
                </div>            
                <div class="col">
                    <label for="nit" class="form-label">NIT</label>
                    <input v-model="hotel.nit" type="text" class="form-control" id="nit">                
                    <div v-if="errores.nit" style="color:red" role="alert">{{errores.nit[0]}}</div>
                </div>
            </div>
            <div class="row  mt-3">
                <div class="col">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input v-model="hotel.address" type="text" class="form-control" id="direccion">
                </div> 
                <div class="col">
                    <label for="nro_habitaciones" class="form-label">Nro de habitaciones</label>
                    <input v-model="hotel.num_rooms" type="text" class="form-control" id="nro_habitaciones">
                </div>
            </div>
            <div class="row mt-3" >
                <div class="col">
                    <label for="ciudad" class="form-label">Ciudad</label>
                    <select class="form-select" id="ciudad" v-model="hotel.city_id" >
                        <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name}}</option>
                    </select>
                </div> 
                <div class="col">
                    
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-8">
                    <button @click="UpdateHotel" type="submit" class="btn btn-primary ">Actualizar Hotel</button>
                </div> 
                <div class="col-md-4">
                    <button @click="removeHotel(this.$route.params.PidRoom)" type="submit" class="btn btn-danger">Eliminar</button>
                </div> 
                <div class="col">
                    
                </div>
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
        props:['PidRoom','Namehotel'],
        beforeMount() {
            axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.PidRoom)
            .then( (response) => {
                this.hotel = response.data.data,
            console.log(response);
            } )
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then( response => (this.cities = response.data) )
    
        },
        data() {
            return {
                errores: {
                    nit: null
                },
                info: null,
                cities: [],
                hotel: {
                    name: null,
                    nit: null,
                    address: null,
                    num_rooms: null,
                    city_id: null,
                }
            }
        },
        methods: {
            UpdateHotel() {
                axios({
                    method: 'put',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.PidRoom,
                    data: this.hotel,
                    responseType: 'json',
                }) 
                .then(response => {  
                    this.info = response.message
                    
                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null
                    
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    
                })            
            },
            removeHotel(id){
            axios
            .delete('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+id)
            .then( (response) => {
                console.log(response);

                  this.info = response.data.message
                    
                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null
               this.refrestData() 
            })
 
            
        },
        refrestData(){
            axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.PidRoom)
            .then( (response) => {
                this.hotel = response.data.data,
            console.log(response);
            } )
        },

        },
    }
    
    </script>