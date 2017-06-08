/* @flow */
/* eslint no-new: 0 */
import Vue from 'vue'

import main from './components/main.vue'
import store from './store'

new Vue({
  store,
  el: '#app',
  render: h => h(main)
})
