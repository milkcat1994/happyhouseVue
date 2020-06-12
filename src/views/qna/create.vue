<template>
  <div>
    <sub-banner />
    <create-form type="create" />
  </div>
</template>

<script>
import store from "@/store/store.js";
import SubBanner from "@/components/qna/SubBanner.vue";
import CreateForm from "@/components/qna/Form.vue";

export default {
  name: "create",
  components: {
    SubBanner,
    CreateForm
  },
  created() {
    store.dispatch("getQnAs");
  },
};
</script>

<style></style>
