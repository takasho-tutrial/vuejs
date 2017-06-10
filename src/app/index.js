/* @flow */
/* eslint no-new: 0 */
import Vue from 'vue'

import store from './store'
import router from './router'

new Vue({
  store,
  router
}).$mount('#app')
