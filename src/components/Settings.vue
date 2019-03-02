<template>
  <!-- Main content START -->
  <div class="container-fluid px-1 px-sm-5">
    <Tabs></Tabs>
    <!-- Featured START -->
    <div class="row">
      <div class="col-12">
        <h3 class="card-title my-3 ml-2 pt-4">Temperature</h3>
        <div class="card" data-unit="fan-kitchen">
          <ul class="list-group borderless">
            <li class="list-group-item align-items-center">
              <h5>Min</h5>
              <input v-model="this.minTemp" type="number" @input="changedMinTemp">
            </li>
            <li class="list-group-item align-items-center">
              <h5>Max</h5>
              <input v-model="this.maxTemp" type="number" @input="changedMaxTemp">
            </li>
          </ul>
        </div>

        <h3 class="card-title my-3 ml-2 pt-4">Air Humidity</h3>
        <div class="card" data-unit="fan-kitchen">
          <ul class="list-group borderless">
            <li class="list-group-item align-items-center">
              <h5>Min</h5>
              <input v-model="this.minHumAir" type="number" @input="changedMinHumAir">
            </li>
            <li class="list-group-item align-items-center">
              <h5>Max</h5>
              <input v-model="this.maxHumAir" type="number" @input="changedMaxHumAir">
            </li>
          </ul>
        </div>

        <h3 class="card-title my-3 ml-2 pt-4">Soil Humidity</h3>
        <div class="card" data-unit="fan-kitchen">
          <ul class="list-group borderless">
            <li class="list-group-item align-items-center">
              <h5>Min</h5>
              <input v-model="this.minHumSoil" type="number" @input="changedMinHumSoil">
            </li>
            <li class="list-group-item align-items-center">
              <h5>Max</h5>
              <input v-model="this.maxHumSoil" type="number" @input="changedMaxHumSoil">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Main content END -->
</template>

<script>
import axios from "axios";
import Tabs from "./Tabs"

export default {
  name: "Settings",
  components: {
    Tabs
  },
  created: function() {
    this.getStates();
  },
  methods: {
    getStates: function() {},
    changedMinTemp: function(event) {
      this.minTemp = event.target.value;
      this.$store.commit("changeMinTemp", event.target.value);
    },
    changedMaxTemp: function(event) {
      this.maxTemp = event.target.value;
      this.$store.commit("changeMaxTemp", event.target.value);
    },
    changedMinHumAir: function(event) {
      this.minHumAir = event.target.value;
      this.$store.commit("changeMinHumAir", event.target.value);
    },
    changedMaxHumAir: function(event) {
      this.maxHumAir = event.target.value;
      this.$store.commit("changeMaxHumAir", event.target.value);
    },
    changedMinHumSoil: function(event) {
      this.minHumSoil = event.target.value;
      this.$store.commit("changeMinHumSoil", event.target.value);
    },
    changedMaxHumSoil: function(event) {
      this.maxHumSoil = event.target.value;
      this.$store.commit("changeMaxHumSoil", event.target.value);
    }
  },
  data() {
    return {
      minTemp: this.$store.getters.minTemp,
      maxTemp: this.$store.getters.maxTemp,
      currTemp: this.$store.getters.currTemp,
      minHumAir: this.$store.getters.minHumAir,
      maxHumAir: this.$store.getters.maxHumAir,
      currHumAir: this.$store.getters.currHumAir,
      minHumSoil: this.$store.getters.minHumSoil,
      maxHumSoil: this.$store.getters.maxHumSoil,
      currHumSoil: this.$store.getters.currHumSoil,
      smokeStatus: this.$store.getters.smokeStatus
    };
  },
  sockets: {
    newState: function(val) {
      console.log("Event Fired!");
      this.getStates();
    }
  }
};
</script>

<style scoped>
</style>
