import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";

import QnAList from "@/views/qna/list.vue";
import QnACreate from "@/views/qna/create.vue";
import QnARead from "@/views/qna/read.vue";
import QnAUpdate from "@/views/qna/update.vue";

import NoticeList from "@/views/notice/list.vue";
import NoticeCreate from "@/views/notice/create.vue";
import NoticeRead from "@/views/notice/read.vue";
import NoticeUpdate from "@/views/notice/update.vue";

import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import MyPage from "@/views/user/mypage.vue";
import FavArea from "@/views/user/favarea.vue";

import Deal from "@/views/deal/list.vue";
// import Deal from "@/views/deal/propertiesGrid.vue";
Vue.use(VueRouter);

// import store from "@/store/store.js";

const requireAuth = (to, from, next) => {
    // if (store.state.auth.isLogin) return next()
    if (Vue.prototype.$session.exists()) return next()
    next({
        path: '/login',
        query: { redirect: to.fullPath }
    })
}

const hasAuth = (to, from, next) => {
    // if (localStorage.userToken) {
    if (Vue.prototype.$session.exists()) {
        next({ path: '/' });
    }
    return next()
}


//signup
const routes = [{
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: '/login',
        component: Login,
        beforeEnter: hasAuth
    },
    {
        path: '/signup',
        component: Signup,
        beforeEnter: hasAuth
    },
    {
        path: '/mypage',
        component: MyPage,
        beforeEnter: requireAuth
    },
    {
        path: '/favarea',
        component: FavArea,
        beforeEnter: requireAuth
    },
    {
        path: "/deal",
        component: Deal,
        beforeEnter: requireAuth
    },
    {
        path: "/notice",
        name: "notice_list",
        component: NoticeList,
        beforeEnter: requireAuth
    },
    {
        path: "/notice/create",
        name: "notice_create",
        component: NoticeCreate,
        beforeEnter: requireAuth
    },
    {
        path: "/notice/read",
        name: "notice_read",
        component: NoticeRead,
        beforeEnter: requireAuth
    },
    {
        path: "/notice/update",
        name: "notice_update",
        component: NoticeUpdate,
        beforeEnter: requireAuth
    },
    {
        path: "/qna",
        name: "qnalist",
        component: QnAList,
        beforeEnter: requireAuth
    },
    {
        path: "/qna/create",
        name: "qnacreate",
        component: QnACreate
    },
    {
        path: "/qna/read",
        name: "qnaread",
        component: QnARead,
        beforeEnter: requireAuth
    },
    {
        path: "/qna/update",
        name: "qnaupdate",
        component: QnAUpdate,
        beforeEnter: requireAuth
    },
    {
        path: "/mypage",
        name: "Mypage",
        component: Index,
        beforeEnter: requireAuth
    },
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