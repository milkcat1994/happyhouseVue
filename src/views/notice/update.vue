<template>
  <div>
    <notice-banner />
    <update-form type="update" />
  </div>
</template>

<script>
import NoticeBanner from "@/components/notice/NoticeBanner.vue";
import UpdateForm from "@/components/notice/Form.vue";
export default {
  name: "notice_update",
  components: {
    NoticeBanner,
    UpdateForm
  }
};
</script>

<style></style>
