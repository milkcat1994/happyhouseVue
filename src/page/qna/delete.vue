<template>
  <div>qna삭제중입니다.</div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "qnadelete",
  created() {
    http
      .delete(`/qna/${this.$route.query.no}`)
      .then(({ data }) => {
        let msg = "qna 삭제 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "qna 삭제가 완료되었습니다.";
        }
        alert(msg);
        this.$router.push("/qna/list");
      })
      .catch(() => {
        alert("qna 삭제 처리시 에러가 발생했습니다.");
      });
  }
};
</script>

<style></style>
