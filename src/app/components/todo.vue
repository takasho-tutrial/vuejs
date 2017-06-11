<template lang="pug">
.counter
  router-link(to='/') Back to Top
  input(type='text', v-model='value', v-on:keyup.enter='addTodo(value)')
  ul
    li(v-for='todo in $store.state.todos') {{ todo }}
</template>

<script>
/* @flow */
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'addTodo'
  ]),
  data: () => {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
