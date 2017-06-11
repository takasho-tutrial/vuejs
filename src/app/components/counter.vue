<template lang="pug">
#app
  router-link(to='/') Back to Top
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
