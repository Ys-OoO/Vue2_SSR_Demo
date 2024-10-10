import Vue from "vue";
import Vuex from "vuex";
import { fetchData } from "../../test/fetchData";

Vue.use(Vuex);

export function createStoreFactory() {
  return new Vuex.Store({
    state: {
      count: 0,
    },
    actions: {
      fetchCount({ commit }) {
        return fetchData().then((res) => {
          commit("SET_COUNT", { count: res.count });
        });
      },
    },
    mutations: {
      SET_COUNT: (state, { count }) => {
        state.count = count;
      },
      INCREMENT_COUNT: (state) => {
        state.count++;
      },
    },
    getters: {
      count(state, getters) {
        return state.count;
      },
    },
  });
}
