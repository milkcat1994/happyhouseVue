<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "./layout/Header.vue";

export default {
  name: "App",
  components: {
    NavHeader
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles";
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css);
</style>
