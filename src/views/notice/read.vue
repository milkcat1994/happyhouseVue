<template>
  <div>
    <main-header />
    <sub-banner title="공지사항" />
    <detail />
    <main-footer />
    
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner.vue";
import store from "@/store/store.js";
import Detail from "@/components/notice/Detail.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "notice_read",
  components: {
    MainHeader,
    SubBanner,
    Detail,
    MainFooter
  },
  created() {
    store.dispatch("getNotice", `${this.$route.query.no}`);
  }
};
</script>

<style></style>