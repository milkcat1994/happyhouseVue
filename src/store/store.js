import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import router from "@/router/router.js";

import { auth } from './auth.module'

// import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    },
    state: {
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
        Notice: {},

        FavAreas: {},
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
        FavAreas(state) {
            return state.FavAreas;
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
        mutateFavAreas(state, FavAreas) {
            for (let idx = 0; idx < FavAreas.length; idx++) {
                FavAreas[idx]['complete'] = true;
                // state.FavAreas.push(fav);
            }
            // console.dir(FavAreas);
            state.FavAreas = FavAreas;
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
        getNotice(context, no) {
            http.get("/notice/" + no).then(({ data }) => {
                if (data) {
                    console.dir(data);
                    context.commit("mutateSetNotice", data);
                } else {
                    alertify.error("정보가 없는 공지사항입니다.", 3,
                        function() { console.log("정보가 없는 공지사항입니다."); });
                    router.push('/notice');
                }
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
        getFavAreas(context, userId) {
            http.get("/user/fav/" + userId).then(({ data }) => {
                if (data) {
                    // console.dir(data);
                    context.commit("mutateFavAreas", data);
                } else {
                    alertify.error("관심지역 로딩 중 오류가 발생했습니다.", 3,
                        function() { console.log("관심지역 로딩 중 오류가 발생했습니다."); });
                }
            });
        }
    },
    // plugins: [
    //     createPersistedState()
    // ]
});