<template>



  <HeaderComponent/>

  <NavbarComponent/>

  <div class="wrap">

    <AsideIzqComponent/>

    <main>
      <router-view></router-view>
      <!-- <h4 style="padding-left: 40px;">contenido de la página</h4> -->
    </main>

    <AsideComponent/>
  </div>
  
  <FooterComponent/>
</template>

<script>

// import EncabezadoComponent from './components/EncabezadoComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import AsideComponent from '@/components/AsideComponent.vue'
import AsideIzqComponent from '@/components/AsideIzqComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderComponent,
    NavbarComponent,
    AsideComponent,
    AsideIzqComponent,
    FooterComponent
  }
}
</script>

<style>
        
  header{
      background-color: yellow;
      text-align: center;
      padding: 50px;
  }
  nav{
      display: flex;
      justify-content: flex-end;
      background-color: antiquewhite;
  }
  nav > div{
      padding: 5px;
      background-color: tomato;
      margin: 5px;
      color: white;
  }
  .wrap{
      background-color: darkolivegreen;
      display: flex;
      padding: 20px;
      flex-wrap: wrap;
  }
  aside{
      background-color: aliceblue;
      flex-grow: 2;
      padding: 20px;
  }
  main{
      background-color: bisque;
      flex-grow: 8;
      height: 400px;
      padding: 20px;
  }
  .derecha{
      flex-grow: 2;
      height: 400px;
      background-color: aliceblue;
  }
  footer{
      padding: 20px;
      background-color: darkseagreen;
      text-align: center;
      color: white;
  }
</style>