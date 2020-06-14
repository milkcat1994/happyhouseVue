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
                  <span>{{ Notice.title }}</span>
                </h3>
                <div v-html="Notice.content"></div>
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="blog-tags">
                      <span>작성자</span>
                      <a href="#">{{ Notice.id }}</a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="pull-right">
                      <i class="flaticon-calendar"></i>
                      {{ getFormatDate(Notice.date) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="clearfix heading-properties-2">
          <div>
            <button class="pull-right btn btn-lg btn-danger" @click="deleteNotice(Notice.no)">삭제</button>
          </div>

          <router-link :to="'/notice/update?no=' + Notice.no">
            <button class="pull-right btn btn-lg btn-warning">수정</button>
          </router-link>

          <router-link to="/notice">
            <button class="pull-right btn btn-lg btn-info">목록</button>
          </router-link>
          <!-- <button class="pull-right btn btn-lg button-theme"
             v-if="type == 'create'" @click="checkHandler">글쓰기</button>
          <button class="pull-right btn btn-lg button-theme" v-else @click="checkHandler">수정</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";
import { getDayDiff, getFormatDate } from "@/util/day-common";
import { mapGetters } from "vuex";
export default {
  name: "notice_detail",
  computed: {
    ...mapGetters(["Notice"])
  },
  methods: {
    getFormatDate(regtime) {
      return getFormatDate(regtime);
    },
    getDayDiff(curTime) {
      return getDayDiff(curTime);
    },
    deleteNotice(no) {
      let msg = "공지사항 삭제 처리시 문제가 발생했습니다.";
      alertify.confirm(
        "공지사항 게시글 삭제",
        "공지사항을 삭제 하시겠습니까?",
        () => {
          http
            .delete("/notice/" + no)
            .then(({ data }) => {
              if (data === "success") {
                msg = "공지사항 게시글 삭제가 완료되었습니다.";
                alertify.success(msg);
              }
              this.$router.push("/notice");
            })
            .catch(() => {
              alertify.alert(msg, () => alertify.warning("alert is closed"));
            });
        },
        () => alertify.error("취소하셨습니다.")
      );

      return false;
    }
  }
};
</script>
