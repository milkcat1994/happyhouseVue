<template>
  <div>
    <main-header />
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
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import http from "@/util/http-common";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapGetters } from "vuex";
export default {
  name: "QnA-Form",
  components: {
    MainHeader,
    MainFooter
  },
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
      if (!err) alertify.error(msg, 3);
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
            this.$router.push("/qna/read?no="+this.no);
          }
          else{
            alertify.error(msg, 3, function(){  console.log('qna수정 실패'); });
          }
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
