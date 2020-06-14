import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index.vue";
import Properties from "@/views/Properties.vue";

import QnAList from "@/views/qna/list.vue";
import QnACreate from "@/views/qna/create.vue";
import QnARead from "@/views/qna/read.vue";
import QnAUpdate from "@/views/qna/update.vue";

import NoticeList from "@/views/notice/list.vue";


import MyPage from "@/views/user/mypage.vue";
import Login from "@/views/Login.vue";
// import { Auth } from '@/api/auth'
Vue.use(VueRouter);

import store from "@/store/store.js";
// const requireAuth = (to, from, next) => {
//     if (Auth.loggedIn()) return next()
//     next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//     })
// }


const requireAuth = (to, from, next) => {
    // if (store.state.auth.isLogin) return next()
    if (Vue.prototype.$session.get('userId')) return next()
    next({
        path: '/login',
        query: { redirect: to.fullPath }
    })
}

const hasAuth = (to, from, next) => {
    // if (localStorage.userToken) {
    if (Vue.prototype.$session.get('userId')) {
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
    // {
    //     path: '/logout',
    //     beforeEnter: (to, from, next) => {
    //         Vue.prototype.$session.destroy();
    //         next({ path: '/' })
    //     }
    // },
    {
        path: '/mypage',
        component: MyPage,
        beforeEnter: requireAuth
    },
    {
        path: "/deal",
        name: "Deal",
        component: Index
    },
    {
        path: "/notice",
        name: "notice",
        component: NoticeList,
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