<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "app",
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
<style></style>
