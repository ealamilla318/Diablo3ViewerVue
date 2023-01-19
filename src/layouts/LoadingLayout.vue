<template>
  <div class="container d-flex justify-content-center align-items-center flex-column" style="height: 100%">
    <div class="loading-layout">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingLayout'
}
</script>

<style lang="stylus" scoped>
  html
    height 100%
    margin 0
    padding 0
  body
    height: 100%
    margin 0
    padding 0
</style>
