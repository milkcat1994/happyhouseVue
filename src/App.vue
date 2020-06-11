<template>
  <div id="app">
    <top-header/>
    <header />
    <router-view></router-view>
    <footer />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import TopHeader from "@/layout/TopHeader.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "App",
  components: {
    TopHeader,
    Header,
    Footer
  }
};
</script>

<style></style>
