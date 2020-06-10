<template>
  <div>
    <detail />
  </div>
</template>

<script>
import store from "@/store/store.js";
import Detail from "@/components/qna/Detail.vue";

export default {
  name: "read",
  components: {
    Detail
  },
  created() {
    store.dispatch("getQnA", `/qna/${this.$route.query.no}`);
  }
};
</script>

<style></style>
