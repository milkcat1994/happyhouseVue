import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";
import Properties from "@/views/Properties.vue";

import QnAList from "@/views/qna/list.vue";
import QnACreate from "@/views/qna/create.vue";
import QnARead from "@/views/qna/read.vue";
import QnAUpdate from "@/views/qna/update.vue";

import NoticeList from "@/views/notice/list.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/deal",
        name: "Deal",
        component: Index
    },
    {
        path: "/notice",
        name: "notice",
        component: NoticeList
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
        path: "/mypage",
        name: "Mypage",
        component: Index
    },
    {
        path: "/Properties",
        name: "Properties",
        component: Properties
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    //router-link 클릭시 스크롤바 가장 최 상단으로 이동
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});

export default router;