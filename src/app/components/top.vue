<template lang="pug">
.application
  h1 Top
  router-link(to="/counter") Go to Counter applicaton
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
