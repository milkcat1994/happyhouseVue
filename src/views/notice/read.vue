<template>
  <div>
    <main-header />
    <notice-banner />
    <detail />
    <main-footer />
    
  </div>
</template>

<script>
import NoticeBanner from "@/components/notice/NoticeBanner.vue";
import store from "@/store/store.js";
import Detail from "@/components/notice/Detail.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "notice_read",
  components: {
    MainHeader,
    NoticeBanner,
    Detail,
    MainFooter
  },
  created() {
    store.dispatch("getNotice", `${this.$route.query.no}`);
  }
};
</script>

<style></style>