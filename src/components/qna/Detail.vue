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
                    <!-- <div class="blog-social-list">
                                    <span>Share</span>
                                    <a href="#" class="facebook-bg">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" class="twitter-bg">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="google-bg">
                                        <i class="fa fa-google"></i>
                                    </a>
                                    <a href="#" class="linkedin-bg">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    <a href="#" class="pinterest-bg">
                                        <i class="fa fa-pinterest"></i>
                                    </a>
                                </div> -->
                  </div>
                </div>
              </div>
            </div>
            <!-- Heading 2 -->

            <!-- <h3 class="heading-2">댓글</h3> -->

            <!-- Comments start -->
            <!-- <ul class="comments">
                    <li>
                        <div class="comment">
                            <div class="comment-author">
                                <a href="#">
                                    <img src="http://placehold.it/60x60" alt="comments-user">
                                </a>
                            </div>
                            <div class="comment-content">
                                <div class="comment-meta">
                                    <h3>
                                        Maikel Alisa
                                    </h3>
                                    <div class="comment-meta">
                                        8:42 PM 1/28/2017<a href="#">Reply</a>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla.</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div class="comment">
                                    <div class="comment-author">
                                        <a href="#">
                                            <img src="http://placehold.it/60x60" alt="comments-user">
                                        </a>
                                    </div>
                                    <div class="comment-content">
                                        <div class="comment-meta">
                                            <h3>
                                                Brady Anne
                                            </h3>
                                            <div class="comment-meta">
                                                8:42 PM 1/28/2017<a href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="comment">
                            <div class="comment-author">
                                <a href="#">
                                    <img src="http://placehold.it/60x60" alt="comments-user">
                                </a>
                            </div>
                            <div class="comment-content">
                                <div class="comment-meta">
                                    <h3>
                                        Anne Brady
                                    </h3>
                                    <div class="comment-meta">
                                        8:42 PM 1/28/2017<a href="#">Reply</a>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla.</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div class="comment">
                                    <div class="comment-author">
                                        <a href="#">
                                            <img src="http://placehold.it/60x60" alt="comments-user">
                                        </a>
                                    </div>
                                    <div class="comment-content mrg-bdr">
                                        <div class="comment-meta">
                                            <h3>
                                                Jane Doe
                                            </h3>
                                            <div class="comment-meta">
                                                8:42 PM 1/28/2017<a href="#">Reply</a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul> -->

            <!-- Comments end -->
            <!-- Contact 2 start -->
            <!-- <div class="contact-2">
                    <h3 class="heading-2">Contact Form</h3>
                    <form action="#" method="GET" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group name">
                                    <input type="text" name="name" class="form-control" placeholder="Name">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group email">
                                    <input type="email" name="email" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group subject">
                                    <input type="text" name="subject" class="form-control" placeholder="Subject">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group number">
                                    <input type="text" name="phone" class="form-control" placeholder="Number">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group message">
                                    <textarea class="form-control" name="message" placeholder="Write message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="send-btn">
                                    <button type="submit" class="btn btn-md button-theme">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div> -->
            <!-- Contact 2 end -->
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
