/*eslint-disable*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchQuery: '',
        userType: undefined,
    },
    getters: {
        getSearchQuery(state) {
            return state.searchQuery;
        },
        getLoginType(state) {
            return state.userType;
        }
    },
    mutations: {
        updateSearchQuery(state, payload) {
            state.searchQuery = payload.searchQuery;
            return state.searchQuery;
        },
        updateLoginType(state, payload) {
            state.userType = payload.userType;
            return state.userType;
        }
    },
    actions: {
        updateSearchQuery(context) {
            return context.commit('updateSearchQuery');
        },
        updateLoginType(context) {
            return context.commit('updateLoginType');
        }
    }
});
