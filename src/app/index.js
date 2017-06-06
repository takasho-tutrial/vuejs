/* @flow */
/* eslint no-new: 0 */
import Vue from 'vue'
import Hello from './components/main.vue'
new Vue({
  el: '#app',
  render: h => h(Hello)
})
