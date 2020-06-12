<template>
  <div>
    <sub-banner />
    <detail />
  </div>
</template>

<script>
import SubBanner from "@/components/qna/SubBanner.vue";
import store from "@/store/store.js";
import Detail from "@/components/qna/Detail.vue";

export default {
  name: "qnaread",
  components: {
    SubBanner,
    Detail
  },
  created() {
    store.dispatch("getQnA", `${this.$route.query.no}`);
  }
};
</script>

<style></style>
