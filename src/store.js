/*eslint-disable*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchQuery: ''
    },
    getters: {
        getSearchQuery(state) {
            return state.searchQuery;
        }
    },
    mutations: {
        updateSearchQuery(state, payload) {
            console.log(`store.js - ${payload.searchQuery}`);
            state.searchQuery = payload.searchQuery;
            return state.searchQuery;
        }
    },
    actions: {
        updateSearchQuery(context) {
            return context.commit('updateSearchQuery');
        }
    }
});
