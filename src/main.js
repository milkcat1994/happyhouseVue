import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router.js";
import store from "@/store/store.js";

import CKEditor from "@ckeditor/ckeditor5-vue";
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import vuetify from '@/plugins/vuetify' // path to vuetify export


Vue.use(CKEditor);

// Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");