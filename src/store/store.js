import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import router from "@/router/router.js";

// import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        userInfo: { id: "admin" },
        userToken: '',

        items: [],
        item: {},

        QnAs: [],
        QnAPageInfo: {
            curPage: 1
        },
        QnA: {},

        Notices: [],
        NoticePageInfo: {
            curPage: 1
        },
        Notice: {}
    },
    getters: {
        userInfo(state) {
            return state.userInfo;
        },
        items(state) {
            return state.items;
        },
        item(state) {
            return state.item;
        },
        QnAs(state) {
            return state.QnAs;
        },
        QnA(state) {
            return state.QnA;
        },
        QnAPageInfo(state) {
            return state.QnAPageInfo;
        },
        Notices(state) {
            return state.Notices;
        },
        Notice(state) {
            return state.Notice;
        },
        NoticePageInfo(state) {
            return state.NoticePageInfo;
        },
    },
    mutations: {
        mutateSetItems(state, items) {
            state.items = items;
        },
        mutateSetItem(state, item) {
            state.item = item;
        },
        mutateSetQnAs(state, QnAs) {
            state.QnAs = QnAs;
        },
        mutateSetQnA(state, QnA) {
            state.QnA = QnA;
        },
        mutateQnAPageInfo(state, QnAPageInfo) {
            state.QnAPageInfo = QnAPageInfo;
        },
        mutateSetNotices(state, Notices) {
            state.Notices = Notices;
        },
        mutateSetNotice(state, Notice) {
            state.Notice = Notice;
        },
        mutateNoticePageInfo(state, NoticePageInfo) {
            state.NoticePageInfo = NoticePageInfo;
        },
        mutateIsLogin(state, isLogin) {
            state.isLogin = isLogin;
        },
        mutateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        mutateUserToken(state, userToken) {
            state.userToken = userToken;
        }
    },
    actions: {
        getItems(context) {
            http
                .get("/qna")
                .then(({ data }) => {
                    context.commit("mutateSetItems", data);
                })
                .catch(() => {
                    alert("에러가 발생했습니다.");
                });
        },
        getItem(context, payload) {
            http.get(payload).then(({ data }) => {
                context.commit("mutateSetItem", data);
            });
        },
        getQnAs(context, pageNo) {
            http
                .post("/qna/" + pageNo, {
                    curPage: pageNo
                })
                .then(({ data }) => {
                    context.commit("mutateSetQnAs", data);
                    console.dir(data);
                })
                .catch(() => {
                    alertify.error("QnA 리스트 조회중 에러가 발생했습니다.", 3,
                        function() { console.log("qna 리스트 조회중 에러가 발생했습니다."); });
                    // alert("qna 리스트 조회중 에러가 발생했습니다.");
                });
        },
        getQnA(context, qnaNo) {
            http.get("/qna/" + qnaNo).then(({ data }) => {
                if (data) {
                    console.dir(data);
                    context.commit("mutateSetQnA", data);
                } else {
                    alertify.error("정보가 없는 QnA입니다.", 3,
                        function() { console.log("정보가 없는 QnA입니다."); });
                    router.push('/qna');
                }
            });
        },
        getQnAPageInfo(context, pageNo) {
            http
                .post("/qna/cnt/" + pageNo, {
                    curPage: pageNo
                })
                .then(({ data }) => {
                    console.log("qnaPageInfo");
                    console.dir(data);
                    context.commit("mutateQnAPageInfo", data);
                })
                .catch(() => {
                    console.log(pageNo);
                    alert("qna 리스트 숫자 조회중 에러가 발생했습니다.");
                });
        },
        getNotices(context) {
            http
                .get("/notice")
                .then(({ data }) => {
                    context.commit("mutateSetNotices", data);
                    console.dir(data);
                })
                .catch(() => {
                    alert("공지사항 조회중 에러가 발생했습니다.");
                });
        },
        getNotice(context, payload) {
            http.get(payload).then(({ data }) => {
                console.dir(data);
                context.commit("mutateSetQnA", data);
            });
        },
        getNoticePageInfo(context, pageNo) {
            http
                .post("/notice/cnt/" + pageNo, {
                    curPage: pageNo
                })
                .then(({ data }) => {
                    console.log("noticePageInfo");
                    console.dir(data);
                    context.commit("mutateNoticePageInfo", data);
                })
                .catch(() => {
                    console.log(pageNo);
                    alert("공지사항 리스트 숫자 조회중 에러가 발생했습니다.");
                });
        },
        login(context, { userId, pwd, url }) {
            http
                .post("/login", {
                    id: userId,
                    pwd: pwd
                })
                .then(({ data }) => {
                    console.log(data);
                    context.commit("mutateIsLogin", true);
                    context.commit("mutateUserToken", Math.random().toString(36).substring(2));
                    context.commit("mutateUserInfo", data);
                    router.replace(url);

                    // 오류 코드 this in promise-then()
                    // Uncaught (in promise) TypeError
                    //this.$router.push('/About')
                })
                .catch(error => {
                    if (error.response.status == "404") {
                        alertify.error("아이디 또는 비밀번호가 올바르지 않습니다.", 3);
                    } else {
                        alertify.error("로그인 처리시 에러가 발생했습니다.", 3);
                    }
                    console.log(error.config);
                });
        },
        logout(context, { url }) {
            http
                .post("/logout")
                .then(data => {
                    console.log(data);
                    context.commit("mutateIsLogin", false);
                    context.commit("mutateUserToken", '');
                    context.commit("mutateUserInfo", {});
                    router.push(url);
                })
                .catch(error => {
                    alertify.error("로그아웃 처리시 에러가 발생했습니다.", 3);
                    console.log(error.config);
                });
        }
    }
    // plugins: [
    //     createPersistedState()
    // ]
});