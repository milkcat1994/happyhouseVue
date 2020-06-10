<template>
  <div class="container" align="center">
    <table class="table table-bordered w-50">
      <tr>
        <th>번호</th>
        <td>{{ QnA.qnaNo }}</td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td>{{ QnA.qnaUserid }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{ QnA.qnaTitle }}</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ getFormatDate(QnA.qnaDatetime) }}</td>
      </tr>
      <tr>
        <td colspan="2">
          {{ QnA.qnaContent }}
        </td>
      </tr>
    </table>

    <br />
    <div class="text-center">
      <router-link to="/qna/list"
        ><button class="btn btn-primary">목록</button></router-link
      >
      <router-link :to="'/qna/update?no=' + QnA.qnaNo"
        ><button class="btn btn-primary">수정</button></router-link
      >
      <router-link :to="'/qna/delete?no=' + QnA.qnaNo"
        ><button class="btn btn-primary">삭제</button></router-link
      >
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "qnadetail",
  computed: {
    ...mapGetters(["QnA"])
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD HH:mm:ss");
    }
  }
};
</script>
