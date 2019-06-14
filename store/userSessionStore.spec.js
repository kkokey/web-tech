import {createLocalVue} from '@vue/test-utils'
import {userSession} from './userSessionStore'
import Vuex from "vuex";

const Vue = createLocalVue();
Vue.use(Vuex);

describe('store', () => {
  it('create store', () => {
    expect(userSession.state.isLogged).toEqual(false);
  });

  it('session', async () => {
    const store = new Vuex.Store(userSession);
    await store.dispatch('userSessionFetch');
    expect(userSession.state.isLogged).toEqual(true)
  });

  it('returns user data', function () {
    const store = new Vuex.Store(userSession);
    // store.dispatch('userSessionFetch');
  });
});
