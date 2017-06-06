<template lang="pug">
#app
  p  {{name}}, hello!
</template>

<script>
/* @flow */
export default {
  data () {
    return {
      name: 'Takasho'
    }
  }
}
</script>

<style scoped lang='scss'>
#app{
  p{
    font-size: 30px;
  }
}
</style>
