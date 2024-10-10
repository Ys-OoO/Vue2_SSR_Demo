import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStoreFactory() {
    return new Vuex.Store({
        state: {
            count: 0
        },
        actions: {

        },
        mutations: {
            INCREMENT_COUNT: (state) => {
                state.count++;
            }
        },
        getters: {
            count(state, getters) {
                return state.count;
            }
        }
    })
}