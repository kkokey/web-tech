import Vue from 'vue';
import Vuex from 'vuex';

import {userSession} from "./userSessionStore";

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    userSession: userSession
  }
});

export default store;
