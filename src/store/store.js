import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    item: {}
  },
  getters: {
    items(state) {
      return state.items;
    },
    item(state) {
      return state.item;
    }
  },
  mutations: {
    mutateSetItems(state, items) {
      state.items = items;
    },
    mutateSetItem(state, item) {
      state.item = item;
    }
  },
  actions: {
    getItems(context) {
      http
        .get("/board")
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
    }
  }
});
