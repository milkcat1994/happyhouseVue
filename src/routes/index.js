import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/page/Main.vue";
import Register from "@/page/user/Register.vue";
import Findpwd from "@/page/user/FindPwd.vue";

import QnAList from "@/page/qna/list.vue";
import QnACreate from "@/page/qna/create.vue";
import QnARead from "@/page/qna/read.vue";
import QnAUpdate from "@/page/qna/update.vue";
import QnADelete from "@/page/qna/delete.vue";

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path: "/user/register",
      name: "register",
      component: Register
    },
    {
      path: "/user/findpwd",
      name: "findpwd",
      component: Findpwd
    },
    {
      path: "/qna",
      name: "qnalist",
      component: QnAList
    },
    {
      path: "/qna/create",
      name: "qnacreate",
      component: QnACreate
    },
    {
      path: "/qna/read",
      name: "qnaread",
      component: QnARead
    },
    {
      path: "/qna/update",
      name: "qnaupdate",
      component: QnAUpdate
    },
    {
      path: "/qna/delete",
      name: "qnadelete",
      component: QnADelete
    }
  ]
});
