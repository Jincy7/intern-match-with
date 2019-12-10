/*eslint-disable*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchQuery: '',
        userType: undefined,
        applicantModal: false,
        internListModal: false
    },
    getters: {
        getSearchQuery(state) {
            return state.searchQuery;
        },
        getLoginType(state) {
            return state.userType;
        },
        getApplicantModal(state) {
            return state.applicantModal
        },
        getInternListModal(state) {
            return state.internListModal
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
        },
        updateApplicantModal(state, payload) {
            state.applicantModal = payload.applicantModal;
            return state.applicantModal;
        },
        updateInternListModal(state, payload) {
            state.internListModal = payload.internListModal;
            return state.internListModal;
        }
    },
    actions: {
        updateSearchQuery(context) {
            return context.commit('updateSearchQuery');
        },
        updateLoginType(context) {
            return context.commit('updateLoginType');
        },
        updateApplicantModal(context) {
            return context.commit('updateApplicantModal');
        },
        updateInternListModal(context) {
            return context.commit('updateInternListModal');
        }
    }
});
