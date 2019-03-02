<template>
  <div class="row px-4 px-sm-5">
    <div class="col-12 col-sm-10 offset-sm-1 p-0">
      <!-- Profile tabs START -->
      <ul class="nav nav-tabs nav-fill" role="tablist">
        <li class="nav-item"><router-link to="manual"      class="nav-link ">Manual</router-link></li>
        <li class="nav-item"><router-link to="settings"   class="nav-link ">Settings</router-link></li>
        <li class="nav-item"><router-link to="alarms"   class="nav-link ">Alarms</router-link></li>
      </ul>
      </div>
  </div>
</template>

<script>
    export default {
        name: "tabs"
    }
</script>

<style scoped>

</style>