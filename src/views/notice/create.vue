<template>
  <div>
    <main-header />
    <notice-banner />
    <create-form type="create" />
    <main-footer />
  </div>
</template>

<script>
import store from "@/store/store.js";
import NoticeBanner from "@/components/notice/NoticeBanner.vue";
import CreateForm from "@/components/notice/Form.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "create",
  components: {
    MainHeader,
    NoticeBanner,
    CreateForm,
    MainFooter
  },
  created() {
  }
};
</script>

<style></style>