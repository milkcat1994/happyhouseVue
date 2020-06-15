<template>
  <div>
    <sub-banner />
    <update-form type="update" />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner.vue";
import UpdateForm from "@/components/notice/Form.vue";
export default {
  name: "notice_update",
  components: {
    SubBanner,
    UpdateForm
  }
};
</script>

<style></style>
