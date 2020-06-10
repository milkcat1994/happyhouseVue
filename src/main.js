import Vue from "vue";
import { router } from "./routes/index.js";
import App from "./App.vue";
import store from "@/store/store.js";
import axios from "axios";

import BootstrapVue from "bootstrap-vue";
// import Bootstrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
