import Vue from "vue";
import VueSocketio from "vue-socket.io";
import VueSweetalert2 from "vue-sweetalert2";
import App from "./App";
import router from "./router";
import { store } from "./store/store";
Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(VueSocketio, "https://d9d37905.ngrok.io");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});