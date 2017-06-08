/* @flow */
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  incrementAsync (state) {
    state.count++
  }
}

export default mutations
