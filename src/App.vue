<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/iot-theme-bundle.min.css'
import './assets/css/animate.css'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  sockets: {
    message: function(val){
      this.$swal({
        type: 'success',
        title: val,
        showConfirmButton: true,
      })
    }
  }
}
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 100px;
    margin-left: 20px;
    margin-right: 20px;
  }
  body{
    color: linear-gradient(135deg, #fbfdff 0, #e4e5eb 100%)
  }
  
</style>
