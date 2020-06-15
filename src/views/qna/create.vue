<template>
  <div>
    <main-header />
    <sub-banner />
    <create-form type="create" />
    <main-footer />
  </div>
</template>

<script>
import store from "@/store/store.js";
import SubBanner from "@/components/SubBanner.vue";
import CreateForm from "@/components/qna/Form.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "create",
  components: {
    MainHeader,
    SubBanner,
    CreateForm,
    MainFooter
  },
  created() {
    // store.dispatch("getQnAs");
  }
};
</script>

<style></style>
