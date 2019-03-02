<template>
  <!-- Top navbar START -->
  <nav class="navbar fixed-top border-bottom" style="background: #f1f1f1;">
    <a class="navbar-brand"><router-link to="/" class="nav-link"><img src="../assets/logo.png" alt="myHotel" style="height: 50px; padding: 0;"></router-link></a>
    <div class="ml-auto">
      <div class="navbar-nav navbar-icons flex-row">
        <!-- <div class="nav-item"><router-link to="#" class="nav-link"><i class="material-icons" style="color:black;">notifications</i></router-link></div> -->
        <div class="nav-item"><router-link to="#" class="nav-link"><i class="material-icons" style="color:black;">person</i></router-link></div>
      </div>
    </div>
  </nav>
  <!-- Top navbar END -->
</template>

<script>
    export default {
        name: "app-nav"
    }
</script>

<style scoped>

</style>
