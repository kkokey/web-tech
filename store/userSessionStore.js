import {userAPI} from './api'

export const userSession = {
  state: {
    isLogged: false,
    userData: {}
  },
  mutations: {
    SET_LOGIN_SUCCESS(state) {
      state.isLogged = true;
    },
    SET_LOGIN_FAIL(state) {
      state.isLogged = false;
    },
    SET_USER_DATA(state, req) {
      state.userData = req.headers;
    }
  },
  actions: {
    async userSessionFetch({dispatch, commit, getters, rootGetters}) {
      const {rsData} = await userAPI.asyncTest();
      if (!rsData.forced) {
        commit('SET_USER_DATA', {data: "user"});
        commit('SET_LOGIN_SUCCESS');
      } else {
        commit('SET_USER_DATA', {data: null});
        commit('SET_LOGIN_FAIL');
      }


    },
    nuxtServerInit({commit}, {req}) {
      if (req) {
        commit('SET_USER_DATA', req)
      }
    }
  },
  getters: {
    userInfo(state) {
      return state.userData;
    },
    isLogin(state) {
      return state.isLogged;
    }
  }
};


