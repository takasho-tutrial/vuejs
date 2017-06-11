/* @flow */
/* eslint no-new: 0 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  count: 10,
  todos: ['1', '2', '3', '4']
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
