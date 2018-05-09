import Vue from 'vue';
import Vuex from 'vuex';
import createdPersistedState from 'vuex-persistedstate';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  name: '',
  lastname: ''
};

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [createdPersistedState()]
});

if (module.hot) {
  module.hot.accept([
    './mutations'
  ], () => {
    store.hotUpdate({
      mutations: require('./mutations')
    })
  })
}

export default store;
