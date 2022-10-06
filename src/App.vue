<template>
    <div>
    
      <NavBar/> 

    
    <div class="bg-success bg-opacity-25">
      <div class="container p-2"><h5>Administracion de Hoteles</h5></div>
    </div>
    
    <div class="bg-success bg-opacity-10">
    <div class="container">
      
      <div class="p-1">
      <div class="bg-white m-2 p-4 rounded-3">
    
        <router-view></router-view>
    
    
      </div>
      </div> 
    
    </div>
    </div>
    

    </div>
   <div class="center"><FooterComponent/></div> 
    </template>
    
<script>
    
    import NavBar from '@/components/v2/NavBar.vue'
 
    import FooterComponent from '@/components/FooterComponent.vue'
    export default {
      name: 'App',
      components: {
            NavBar,
            FooterComponent
      }
    }
    </script>
    
    <style>
    footer{
      padding: 20px;
      background-color: darkseagreen;
      text-align: center;
      color: white;
  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
    </style>
    