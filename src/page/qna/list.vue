<template>
  <section class="page-section" id="services">
    <div v-if="QnAs.length" class="container" align="center">
      <h2 class="text-center mt-0">QnA게시판</h2>
      <hr class="divider my-4" />

      <div class="col-lg-10" align="center">
        <div style="float:right;">
          <button class="btn btn-primary" @click="movePage">글쓰기</button>
          <div>&nbsp;</div>
        </div>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>시간</th>
            </tr>
          </thead>
          <list-row
            v-for="(QnA, index) in QnAs"
            :key="`${index}_qna`"
            :no="QnA.no"
            :title="QnA.title"
            :writer="QnA.writer"
            :regtime="QnA.regtime"
          />
        </table>
      </div>
      <div class="col-sm-10">
        <div>
          <!-- <pagination/> -->
          <!-- <ul id="pagination" class="pagination justify-content-center">
						</ul> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store/store.js";
import { mapGetters } from "vuex";
import ListRow from "@/components/qna/Row.vue";
// import Pagination from "@/components/qna/Pagination.vue";

export default {
  name: "list",
  components: {
    ListRow
    // Pagination
  },
  computed: {
    //해당 페이지 정보에 따라 갱신해야함.
    ...mapGetters(["QnAs"])
  },
  created() {
    store.dispatch("getQnAs");
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    }
  }
};
</script>

<style></style>
