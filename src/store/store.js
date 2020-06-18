import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import router from "@/router/router.js";

import { padZero } from "@/util/util-common";
import { auth } from './auth.module'

import createPersistedState from 'vuex-persistedstate';
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
        Stores: [],
        Envs: [],
        Houses: [],
        House: {},
        NeerPriceHosues: [],
        RecentHouse: [],

        HouseName: [],
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
        },
        Stores(state) {
            return state.Stores;
        },
        Envs(state) {
            return state.Envs;
        },
        Houses(state) {
            return state.Houses;
        },
        House(state) {
            return state.House;
        },
        HouseName(state) {
            return state.HouseName;
        },
        NeerPriceHosues(state) {
            return state.NeerPriceHosues;
        },
        RecentHouse(state) {
            return state.RecentHouse;
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
        mutateFavAreas(state, FavAreas) {
            for (let idx = 0; idx < FavAreas.length; idx++) {
                FavAreas[idx]['complete'] = true;
            }
            state.FavAreas = FavAreas;
        },
        mutateSetHouses(state, Houses) {
            state.Houses = Houses.map(
                h => h.dealDate ? h : {...h, dealDate: padZero(h.dealYear, 2) + padZero(h.dealMonth, 2) + padZero(h.dealDay, 2) }
            );
        },
        mutateSetHouseName(state, HouseName) {
            state.HouseName = [];
            for (let idx in HouseName) {
                state.HouseName.push(HouseName[idx].aptName)
            }
        },
        mutateSetStores(state, Stores) {
            state.Stores = Stores;
        },
        mutateSetEnvs(state, Envs) {
            state.Envs = Envs;
        },
        mutateSetHouse(state, House) {
            state.House = House;
        },
        mutateSetNeerPrice(state, NeerPriceHosues) {
            state.NeerPriceHosues = NeerPriceHosues;
        },
        mutateSetRecentHouse(state, RecentHouse) {
            //없다면 무조건 넣기
            if (state.RecentHouse.length == 0) {
                state.RecentHouse = [];
                state.RecentHouse.unshift(RecentHouse);
            } else {
                let isExistsItem = false;
                //한번 돌면서 이미 들어있는지 확인
                for (let idx in state.RecentHouse) {
                    if (state.RecentHouse[idx].no == RecentHouse.no) {
                        isExistsItem = true;
                        break;
                    }
                }
                //없을 경우만 저장 할 것이다.
                if (!isExistsItem) {
                    //최대 길이라면 마지막 삭제 이후 넣기
                    if (state.RecentHouse.lenght >= 3) {
                        state.RecentHouse = state.RecentHouse.slice(0, 3);
                        state.RecentHouse.unshift(RecentHouse);
                    } else {
                        state.RecentHouse.unshift(RecentHouse);
                    }
                }
            }
            // state.RecentHouse = RecentHouse;
            if (state.RecentHouse.length > 3) {
                state.RecentHouse = state.RecentHouse.slice(0, 3);
            }
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
                })
                .catch(() => {
                    alertify.error("QnA 리스트 조회중 에러가 발생했습니다.", 3);
                })
        },
        getQnA(context, qnaNo) {
            http.get("/qna/" + qnaNo).then(({ data }) => {
                if (data) {
                    context.commit("mutateSetQnA", data);
                } else {
                    alertify.error("정보가 없는 QnA입니다.", 3);
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
                    context.commit("mutateQnAPageInfo", data);
                })
                .catch(() => {
                    alert("qna 리스트 숫자 조회중 에러가 발생했습니다.");
                });
        },
        getNotices(context, pageNo) {
            http
                .post("/notice/" + pageNo, {
                    curPage: pageNo
                })
                .then(({ data }) => {
                    context.commit("mutateSetNotices", data);
                })
                .catch(() => {
                    alert("공지사항 조회중 에러가 발생했습니다.");
                });
        },
        getNotice(context, no) {
            http.get("/notice/" + no).then(({ data }) => {
                if (data) {
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
                    context.commit("mutateNoticePageInfo", data);
                })
                .catch(() => {
                    alert("공지사항 리스트 숫자 조회중 에러가 발생했습니다.");
                });
        },
        getFavAreas(context, userId) {
            http.get("/user/fav/" + userId).then(({ data }) => {
                if (data) {
                    context.commit("mutateFavAreas", data);
                } else {
                    alertify.error("관심지역 로딩 중 오류가 발생했습니다.", 3,
                        function() { console.log("관심지역 로딩 중 오류가 발생했습니다."); });
                }
            });
        },
        getHouses(context, no) {
            return new Promise((resolve) => {
                http
                    .get("/housedeal/multi/" + no)
                    .then(({ data }) => {
                        if (data) {
                            context.commit("mutateSetHouses", data);
                            resolve(data);
                        } else {
                            alertify.error("거래정보가 없습니다.", 3,
                                function() { console.log("거래정보가 없습니다."); });
                        }
                    });
            })
        },
        getHouse(context, obj) {
            // console.log(obj);
            return new Promise((resolve) => {
                http
                    .post("/housedeal/" + obj.no, { dong: obj.dong })
                    .then(({ data }) => {
                        if (data) {
                            context.commit("mutateSetHouse", data);
                            resolve(data);
                        } else {
                            alertify.error("정보가 없는 거래정보입니다.", 3,
                                function() { console.log("정보가 없는 거래정보입니다."); });
                            router.push('/deal');
                        }
                    });
            })
        },
        getHouseName(context) {
            return new Promise((resolve) => {
                http
                    .get("/houseinfo")
                    .then(({ data }) => {
                        if (data) {
                            context.commit("mutateSetHouseName", data);
                            resolve(data);
                        } else {
                            alertify.error("오류발생하였습니다.", 3,
                                function() { console.log("오류가 발생하였습니다."); });
                        }
                    });
            })
        },
        getStores(context, obj) {
            return new Promise((resolve) => {
                http
                    .post("/store", {
                        city: obj.city,
                        gu: obj.gu,
                        dong: obj.dong,
                    })
                    .then(({ data }) => {
                        if (data) {
                            context.commit("mutateSetStores", data);
                            resolve(data);
                        } else {
                            alertify.error("상가 정보조회 중 오류가 발생하였습니다.", 3,
                                function() { console.log("상가 정보조회 중 오류가 발생하였습니다."); });
                        }
                    });
            })
        },
        getEnvs(context, obj) {
            return new Promise((resolve) => {
                http
                    .post("/env", {
                        city: obj.city,
                        gu: obj.gu,
                        dong: obj.dong,
                    })
                    .then(({ data }) => {
                        if (data) {
                            context.commit("mutateSetEnvs", data);
                            resolve(data);
                        } else {
                            alertify.error("환경 정보조회 중 오류가 발생하였습니다.", 3,
                                function() { console.log("환경 정보조회 중 오류가 발생하였습니다."); });
                        }
                    });
            })
        },
        getNeerPriceHouses(context, price) {
            http
                .post("/housedeal/neerprice", { dealAmount: price })
                .then(({ data }) => {
                    if (data) {
                        context.commit("mutateSetNeerPrice", data);
                    } else {
                        alertify.error("가격이 비슷한 매물이 없는 거래 정보입니다.", 3,
                            function() { console.log("가격이 비슷한 매물이 없는 거래 정보입니다"); });
                    }
                });
        },
        saveRecentHouse(context, obj) {
            context.commit("mutateSetRecentHouse", obj);
        }
    },
    plugins: [
        createPersistedState()
    ]
});