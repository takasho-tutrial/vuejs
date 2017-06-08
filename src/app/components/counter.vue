<template lang="pug">
#app
  p  Count : {{ $store.state.count }}
  button(v-on:click="increment")
    | increment
  button(v-on:click="decrement")
    | decrement
  button(v-on:click="incrementAsync")
    | incrementAsync
</template>

<script>
/* @flow */
import { mapActions } from 'vuex'

import store from '../store'

export default {
  methods: mapActions([
    'increment',
    'decrement',
    'incrementAsync'
  ])
}
</script>

<style scoped lang='scss'>
#app{
  p{
    font-size: 30px;
  }
}
</style>
