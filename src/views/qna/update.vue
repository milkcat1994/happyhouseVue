<template>
  <div>
    <sub-banner title="Q&A" />
    <update-form type="update" />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner.vue";
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
