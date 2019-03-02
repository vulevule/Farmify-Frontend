import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainLight: false,
    rainDrops: false,
    floorPipes: false,
    ventilation: false,
    heating: false,
    temperature: 22,
    minTemp: 10,
    maxTemp: 40,
    currTemp: 25,
    minHumAir: 20,
    maxHumAir: 80,
    currHumAir: 50,
    minHumSoil: 20,
    maxHumSoil: 80,
    currHumSoil: 50,
    smokeStatus: false
  },
  mutations: {
    changeMainLight(state, mainLight) {
      state.mainLight = mainLight;
    },
    changeRainDrops(state, rainDrops) {
      state.rainDrops = rainDrops;
    },
    changeFloorPipes(state, floorPipes) {
      state.floorPipes = floorPipes;
    },
    changeVentilation(state, ventilation) {
      state.ventilation = ventilation;
    },
    changeHeating(state, heating) {
      state.heating = heating;
    },
    changeTemperature(state, temperature) {
      state.temperature = temperature;
    },
    changeMinTemp(state, minTemp) {
      state.minTemp = minTemp;
    },
    changeMaxTemp(state, maxTemp) {
      state.maxTemp = maxTemp;
    },
    changeCurrTemp(state, currTemp) {
      state.currTemp = currTemp;
    },
    changeMinHumAir(state, minHumAir) {
      state.minHumAir = minHumAir;
    },
    changeMaxHumAir(state, maxHumAir) {
      state.maxHumAir = maxHumAir;
    },
    changeMinHumSoil(state, minHumSoil) {
      state.minHumSoil = minHumSoil;
    },
    changeMaxHumSoil(state, maxHumSoil) {
      state.maxHumSoil = maxHumSoil;
    },
    changeCurrHumSoil(state, currHumSoil) {
      state.currHumSoil = currHumSoil;
    },
    changeSmokeStatus(state, smokeStatus) {
      state.smokeStatus = smokeStatus;
    }
  },
  getters: {
    mainLight: state => state.mainLight,
    rainDrops: state => state.rainDrops,
    floorPipes: state => state.floorPipes,
    ventilation: state => state.ventilation,
    heating: state => state.heating,
    temperature: state => state.temperature,
    minTemp: state => state.minTemp,
    maxTemp: state => state.maxTemp,
    currTemp: state => state.currTemp,
    minHumAir: state => state.minHumAir,
    maxHumAir: state => state.maxHumAir,
    currHumAir: state => state.currHumAir,
    minHumSoil: state => state.minHumSoil,
    maxHumSoil: state => state.maxHumSoil,
    currHumSoil: state => state.currHumSoil,
    smokeStatus: state => state.smokeStatus
  }
});
