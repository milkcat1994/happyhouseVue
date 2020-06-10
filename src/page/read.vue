<template>
  <div>
    <detail />
  </div>
</template>

<script>
import store from "@/store/store.js";
import Detail from "@/components/Detail.vue";

export default {
  name: "read",
  components: {
    Detail
  },
  created() {
    store.dispatch("getItem", `/board/${this.$route.query.no}`);
  }
};
</script>

<style></style>
