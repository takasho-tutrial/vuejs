<template lang="pug">
.application
  h1 Top
  ul
    li
      router-link(to="/counter") Counter
    li
      router-link(to="/todo") Todo  
</template>

<script>
/* @flow */
import counter from './counter.vue'

export default {
  components: {
    counter
  }
}
</script>

<style scoped lang='scss'>
</style>
