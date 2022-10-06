<template>
    <div>
    
    <NavBar/> 
    
    <div class="bg-success bg-opacity-25">
      <div class="container p-2"><h5>Panel Hoteles</h5></div>
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
    </template>
    
<script>
    
    import NavBar from '@/components/v2/NavBar.vue'
    
    
    export default {
      name: 'App',
      components: {
            NavBar
      }
    }
    </script>
    
    <style>
    
    </style>
    