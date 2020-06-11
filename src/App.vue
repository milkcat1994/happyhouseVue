<template>
  <div id="app">
    <main-header />
    <router-view></router-view>
    <footer />
  </div>
</template>

<script>
import MainHeader from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    Footer
  }
};
</script>

<style></style>
