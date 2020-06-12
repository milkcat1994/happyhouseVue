import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import router from "@/router/router.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLogin: false,
        userInfo: {},
        items: [],
        item: {},
        QnAs: [],
        QnA: {}
    },
    getters: {
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
        }
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
        getQnA(context, payload) {
            http.get(payload).then(({ data }) => {
                console.dir(data);
                context.commit("mutateSetQnA", data);
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
    }
});