<template>
  <div>
    
    <!-- Blog body start -->
    <div class="blog-body content-area-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Blog 1 start -->
            <div class="blog-1 blog-big">
              <div id="form-qna">
                <!-- 제목 -->
                <input
                  class="title title-danger"
                  type="text"
                  id="title"
                  ref="title"
                  placeholder="제목을 입력하세요"
                  v-model="title"
                />
                <!-- CKEditor -->
                <ckeditor
                  :editor="editor"
                  v-model="editorData"
                  :config="editorConfig"
                  tag-name="textarea"
                  ref="editorData"
                ></ckeditor>
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
          <button
            class="pull-right btn btn-lg button-theme"
            v-if="type == 'create'"
            @click="checkHandler">
            글쓰기
          </button>
          <button
            class="pull-right btn btn-lg button-theme"
            v-else
            @click="checkHandler">
            수정
          </button>
          
          <router-link to="/qna"
            ><button class="pull-right btn btn-lg btn-info">
              목록
            </button></router-link>
        </div>
      </div>
    </div>
    <!-- Blog body end -->

    <!-- <div class="form-group">
      <label for="writer">작성자</label>
      <input
        type="text"
        class="form-control"
        id="writer"
        ref="writer"
        placeholder="작성자를 입력하세요"
        v-model="writer"
      />
    </div>
    <div class="form-group">
      <label for="title">제목</label>
      <input
        type="text"
        class="form-control"
        id="title"
        ref="title"
        placeholder="제목을 입력하세요"
        v-model="title"
      />
    </div>
    <div class="form-group">
      <label for="content">내용</label>
      <textarea
        type="text"
        class="form-control"
        id="contnet"
        ref="content"
        placeholder="내용을 입력하세요"
        v-model="content"
      ></textarea>
    </div>
    <div class="text-right">
      <button
        class="btn btn-primary"
        v-if="type == 'create'"
        @click="checkHandler"
      >
        등록
      </button>
      <button class="btn btn-primary" v-else @click="checkHandler">수정</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
    </div> -->
  </div>
</template>

<script>
import http from "@/util/http-common";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapGetters } from "vuex";
export default {
  name: "QnA-Form",
  props: {
    type: { type: String }
  },
  data() {
    return {
      no: "",
      regtime: "",
      title: "",

      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "blockQuote",
          "insertTable",
          "|",
          "undo",
          "redo"
        ]
        // language: "ko",
        // The configuration of the editor.
      }
    };
  },
  methods: {
    checkHandler() {
      let err = true;
      let msg = "";
      !this.title &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.editorData &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.editorData.focus());
      console.dir(this.$session.get('userId'));
      if (!err) alert(msg);
      else this.type == "create" ? this.createHandler() : this.updateHandler();
    },
    createHandler() {
      let msg = "등록 처리시 문제가 발생했습니다.";
      http
        .post("/qna", {
          qnaUserid: this.$session.get('userId'),
          qnaTitle: this.title,
          qnaContent: this.editorData
        })
        .then(({ data }) => {
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
            alertify.notify(msg, 'success', 3, function(){  console.log('qna등록 완료'); });
            this.moveList();
          }
        })
        .catch(() => {
            alertify.error(msg, 3, function(){  console.log('qna등록 서버 통신 실패'); });
        });
    },
    updateHandler() {
      let msg = "수정 처리시 문제가 발생했습니다.";
      http
        .put(`/qna/${this.no}`, {
          qnaNo: this.no,
          qnaDatetime: this.regtime,
          qnaUserid: this.$session.get('userId'),
          qnaTitle: this.title,
          qnaContent: this.editorData
        })
        .then(({ data }) => {
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
            alertify.notify(msg, 'success', 3, function(){  console.log('qna수정 완료'); });
            this.moveList();
          }
            alertify.error(msg, 3, function(){  console.log('qna수정 실패'); });
        })
        .catch(() => {
            alertify.error(msg, 3, function(){  console.log('qna수정 서버 통신 실패'); });
        });
    },
    moveList() {
      this.$router.push("/qna");
    }
  },
  created() {
    () => {
      if (this.type === "update") {
        http
        .get(`/qna/${this.$route.query.no}`)
        .then(({ data }) => {
          this.no = data.qnaNo;
          this.regtime = data.qnaDatetime;
          this.title = data.qnaTitle;
          this.editorData = data.qnaContent;
        })
        .catch(() => {
          alertify.error(msg, 3, function(){  console.log('qna수정전 데이터 전송 도중 서버 통신 실패'); });
        });
    }
      }
  }
};
</script>
<style>
.ck-editor__editable {
  height: 400px;
}
#form-qna .title {
  padding: 15px 15px;
  background-color: #ffffff;
  margin-bottom: 10px;
  border-radius: 2px;
  border: 1px solid #eaeff5;
  border-left: 4px solid #838992;
  box-shadow: 0px 0px 10px 1px rgba(71, 85, 95, 0.08);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(71, 85, 95, 0.08);
  -moz-box-shadow: 0px 0px 10px 1px rgba(71, 85, 95, 0.08);
  color: #4a4a4a;
  width: 100%;
}

#form-qna .title-danger {
  border-left-color: #eb344f !important;
}
</style>
