<template>
  <div>
    <!-- Blog body start -->
    <div class="blog-body content-area-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Blog 1 start -->
            <div class="blog-1 blog-big">
              <div class="detail">
                <h3>
                  <span>{{ QnA.qnaTitle }}</span>
                </h3>
                <div v-html="QnA.qnaContent"></div>
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-tags">
                      <span>작성자</span>
                      <a href="#">{{ QnA.qnaUserid }}</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="pull-right">
                      <i class="flaticon-calendar"></i
                      >{{ getFormatDate(QnA.qnaDatetime) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix heading-properties-2">
          <div>
            <button class="pull-right btn btn-lg btn-danger"
            @click="deleteQnA(QnA.qnaNo)">
              삭제
            </button>
            </div>

          <router-link :to="'/qna/update?no=' + QnA.qnaNo"
            ><button class="pull-right btn btn-lg btn-warning">
              수정
            </button></router-link>

          <router-link to="/qna"
            ><button class="pull-right btn btn-lg btn-info">
              목록
            </button></router-link>
        </div>
        <div class=""></div>
      </div>
    </div>
    <!-- Blog body end -->

  </div>
</template>

<script>
import http from "@/util/http-common";
import { getDayDiff, getFormatDate } from "@/util/day-common";
import { mapGetters } from "vuex";
export default {
  name: "qnadetail",
  computed: {
    ...mapGetters(["QnA"])
  },
  methods: {
    getFormatDate(regtime) {
      return getFormatDate(regtime);
    },
    getDayDiff(curTime) {
      return getDayDiff(curTime);
    },
    deleteQnA(qnaNo){
      let msg = "qna 삭제 처리시 문제가 발생했습니다.";
      alertify.confirm('QnA 게시글 삭제',
        '질문을 삭제 하시겠습니까?',
        () => {
          http
          .delete('/qna/'+qnaNo)
          .then(({ data }) => {
            if (data === "success") {
              msg = "QnA 게시글 삭제가 완료되었습니다.";
              alertify.success(msg);
            }
            this.$router.push("/qna");
          })
          .catch(() => {
            alertify.alert(msg, () =>
            alertify.warning('alert is closed')
            );
          })
        },
        () => {alertify.error('취소하셨습니다.')}
      );

      return false;
    }
  }
};
</script>
