import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    }
  }
});
