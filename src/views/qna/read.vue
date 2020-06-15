<template>
  <div>
    <main-header />
    <sub-banner title="Q&A" />
    <detail />
    <main-footer />
    
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner.vue";
import store from "@/store/store.js";
import Detail from "@/components/qna/Detail.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "qnaread",
  components: {
    MainHeader,
    SubBanner,
    Detail,
    MainFooter
  },
  created() {
    store.dispatch("getQnA", `${this.$route.query.no}`);
  }
};
</script>

<style></style>
