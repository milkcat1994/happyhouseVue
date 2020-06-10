<template>
  <div class="container">
    <h2>You Are Logged On</h2>
    <button @click="goLogout" type="button" class="btn btn-primary">
      Logout
    </button>
  </div>
</template>

<script>
import store from "@/store/store.js";

export default {
  name: "Logout",
  methods: {
    goLogout() {
      store.dispatch("logout", { url: "/" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
