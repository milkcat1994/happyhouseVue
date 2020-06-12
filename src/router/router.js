import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Properties from "../views/Properties.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/Properties",
    name: "Properties",
    component: Properties
  }
];

const router = new VueRouter({
  routes
});

export default router;
