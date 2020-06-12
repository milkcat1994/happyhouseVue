import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";
import Properties from "@/views/Properties.vue";


import QnAList from "@/views/qna/list.vue";
import QnACreate from "@/views/qna/create.vue";
import QnARead from "@/views/qna/read.vue";
import QnAUpdate from "@/views/qna/update.vue";

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
        name: "Notice",
        component: Index
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
    // {
    //     path: "/qna/delete",
    //     name: "qnadelete",
    //     component: QnADelete
    // },
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
    routes
});

export default router;