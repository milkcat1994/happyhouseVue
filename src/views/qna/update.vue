<template>
  <div>
    <sub-banner />
    <update-form type="update" />
  </div>
</template>

<script>
import SubBanner from "@/components/qna/SubBanner.vue";
import UpdateForm from "@/components/qna/Form.vue";
export default {
  name: "qnaupdate",
  components: {
    SubBanner,
    UpdateForm
  }
};
</script>

<style></style>
