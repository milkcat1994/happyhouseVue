import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/page/index.vue";
import List from "@/page/list.vue";
import Create from "@/page/create.vue";
import Read from "@/page/read.vue";
import Update from "@/page/update.vue";
import Delete from "@/page/delete.vue";

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
      name: "index",
      component: Index
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/read",
      name: "read",
      component: Read
    },
    {
      path: "/update",
      name: "update",
      component: Update
    },
    {
      path: "/delete",
      name: "delete",
      component: Delete
    },
    {
      path: "/qna/list",
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
