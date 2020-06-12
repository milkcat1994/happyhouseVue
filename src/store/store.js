import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import router from "@/router/router.js";

// import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        userInfo: { "id": "admin" },
        items: [],
        item: {},
        QnAs: [],
        QnAPageInfo: {
            "curPage": 1
        },
        QnA: {}
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

        mutateIsLogin(state, isLogin) {
            state.isLogin = isLogin;
        },
        mutateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
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
        getQnAs(context) {
            http
                .get("/qna")
                .then(({ data }) => {
                    context.commit("mutateSetQnAs", data);
                    console.dir(data);
                })
                .catch(() => {
                    alert("qna 리스트 조회중 에러가 발생했습니다.");
                });
        },
        getQnA(context, qnaNo) {
            http.get('/qna/' + qnaNo).then(({ data }) => {
                console.dir(data);
                context.commit("mutateSetQnA", data);
            });
        },
        getQnAPageInfo(context, pageNo) {
            http
                .post('/qna/cnt/' + pageNo, {
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
        login(context, { userId, pwd, url }) {
            http
                .post("/login", {
                    id: userId,
                    pwd: pwd
                })
                .then(({ data }) => {
                    console.log(data);
                    context.commit("mutateIsLogin", true);
                    context.commit("mutateUserInfo", data);
                    router.push(url);

                    // 오류 코드 this in promise-then()
                    // Uncaught (in promise) TypeError
                    //this.$router.push('/About')
                })
                .catch(error => {
                    if (error.response.status == "404") {
                        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
                    } else {
                        alert("로그인 처리시 에러가 발생했습니다.");
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
                    context.commit("mutateUserInfo", {});
                    router.push(url);
                })
                .catch(error => {
                    alert("로그아웃 처리시 에러가 발생했습니다.");
                    console.log(error.config);
                });
        }
    },
    // plugins: [
    //     createPersistedState()
    // ]
});