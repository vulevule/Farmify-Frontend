<template>
  <!-- Main content START -->
  <div class="container-fluid px-1 px-sm-5">
    <Tabs></Tabs>
    
    <!-- Featured START -->
    <div class="row">
      <div class="col-12">
        <!-- Indoor lights  START -->
        <h3 class="card-title my-3 ml-2 pt-2">Lights</h3>
        <div class="card" data-unit="switch-light-6">
          <div class="card-body d-flex flex-row justify-content-start">
            <i
              style="color:black; padding-top: 10px; margin-right: 15px;"
              class="material-icons"
            >wb_incandescent</i>
            <h5>Main light</h5>
            <p
              id="light"
              @click="switcher"
              class="switch ml-auto"
              v-bind:class="{ checked: this.mainLight}"
            >
              <input type="checkbox">
            </p>
          </div>
        </div>
        <!-- Indoor lights  END -->
        <h3 class="card-title my-3 ml-2 pt-4">Temperature</h3>
        <!-- Air Condition  START -->
        <div class="card" data-unit="fan-kitchen">
          <!-- FAN Kitchen switch START -->
          <ul class="list-group borderless">
            <li class="list-group-item align-items-center">
              <i style="color:black; margin-right: 15px;" class="material-icons">ac_unit</i>
              <h4>Ventilation</h4>
              <p
                id="ventilation"
                @click="switcher"
                class="switch ml-auto"
                v-bind:class="{ checked: this.ventilation }"
              >
                <input type="checkbox">
              </p>
            </li>
            <li class="list-group-item align-items-center">
              <i style="color:black; margin-right: 15px;" class="material-icons">ac_unit</i>
              <h4>Heating</h4>
              <p
                id="heating"
                @click="switcher"
                class="switch ml-auto"
                v-bind:class="{ checked: this.heating }"
              >
                <input type="checkbox">
              </p>
            </li>
          </ul>
          <hr class="my-0">
          <!-- FAN Kitchen switch END -->
          <div class="d-flex justify-content-between" data-rangeslider="room-temp-01">
            <ul class="list-group borderless px-1 align-items-stretch">
              <li class="list-group-item">
                <p class="specs mr-auto mb-auto">
                  Heating temp
                  <span class="room-temp-C ml-2">{{currTemp}}</span>
                  <sup>°C</sup>
                </p>
              </li>
            </ul>
            <div class="p-4" style="position:relative;">
              <input v-model="currTemp" class="rangeslider" type="range" max="this.maxTemp" min="this.minTemp">
              <div class="info-holder info-lc">
                <div data-toggle="popover-all"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Air Condition END -->
        <h3 class="card-title my-3 ml-2 pt-3">Irigation</h3>
        <div class="card">
          <div class="card-body d-flex flex-wrap align-items-center p-0">
            <div class="col-sm-12 col-lg-5 pl-3 pr-3 pt-3 pb-1">
              <ul class="list-group list-group-flush border-bottom-0">
                <li
                  class="list-group-item d-flex lock px-0 px-sm-3"
                  data-unit="switch-house-lock-pin"
                >
                  <i
                    style="color:black; padding-top: 10px; margin-right: 15px;"
                    class="material-icons"
                  >queue_music</i>
                  <div class="title-status">
                    <h4>Rain Drops</h4>
                    <p class="status">
                      <span></span>
                    </p>
                  </div>
                  <p id="raindrops" @click="switcher" class="switch ml-auto mt-2">
                    <input type="checkbox">
                  </p>
                </li>
                <hr class="my-0">
              </ul>
            </div>

            <div class="col-sm-12 col-lg-5 pl-3 pr-3 pt-1 pb-3">
              <ul class="list-group list-group-flush border-bottom-0">
                <li
                  class="list-group-item d-flex lock px-0 px-sm-3"
                  data-unit="switch-house-lock-pin"
                >
                  <i
                    style="color:black; padding-top: 15px; margin-right: 15px;"
                    class="material-icons"
                  >tv</i>
                  <div class="title-status">
                    <h4>Floor pipes</h4>
                    <p class="status">
                      <span></span>
                    </p>
                  </div>
                  <p
                    id="floorpipes"
                    @click="switcher"
                    class="switch ml-auto mt-2"
                    v-bind:class="{ checked: this.floorPipes }"
                  >
                    <input type="checkbox">
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main content END -->
</template>

<script>
import axios from "axios";
import Tabs from '../components/Tabs'

export default {
  name: "Room",
  components: {
    Tabs
  },
  created: function() {
    this.getStates();
  },
  methods: {
    getStates: function() {
      axios
        .get(`https://d9d37905.ngrok.io/api/device/states`)
        .then(response => {
          if (response.data[0].state == "on")
            this.$store.commit("changeMainLight", true);
          else this.$store.commit("changeMainLight", false);

          if (response.data[1].state == "on")
            this.$store.commit("changeVentilation", true);
          else this.$store.commit("changeVentilation", false);

          if (response.data[2].state == "on") 
            this.$store.commit("changeHeating", true);
          else this.$store.commit("changeHeating", false);

          this.$store.commit("changeTemperature", parseInt(response.data[3].state));
          console.log(response);

          if (response.data[4].state == "on")
            this.$store.commit("changeRainDrops", true);
          else this.$store.commit("changeRainDrops", false);

          if (response.data[5].state == "on") 
            this.$store.commit("changeFloorPipes", true);
          else this.$store.commit("changeFloorPipes", false);
        });
    },
    switcher(e) {
      console.log(e.target.id);
      if (!e.target.classList.contains("checked")) {
        console.log("unchecked");
        e.target.classList.add("checked");
        axios
          .post(`https://d9d37905.ngrok.io/api/device/${e.target.id}`, {
            state: "on"
          })
          .then(response => {
            console.log(response);
          });
      } else {
        console.log("checked");

        e.target.classList.remove("checked");
        axios
          .post(`https://d9d37905.ngrok.io/api/device/${e.target.id}`, {
            state: "off"
          })
          .then(response => {
            console.log(response);
          });
      }
    }
  },
  data() {
    return {
      mainLight: this.$store.getters.mainLight,
      rainDrops: this.$store.getters.rainDrops,
      floorPipes: this.$store.getters.floorPipes,
      ventilation: this.$store.getters.ventilation,
      heating: this.$store.getters.heating,
      temperature: this.$store.getters.temperature,
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
