/* @flow */
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  addTodo (state, todo) {
    state.todos.push(todo)
  }
}

export default mutations
