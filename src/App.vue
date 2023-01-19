<template>
  <div id="app">

    <LoadingLayout v-if="isLoading">
      <BaseLoading/>
    </LoadingLayout>

    <MainLayout v-else/>

  </div>
</template>

<script>
import LoadingLayout from './layouts/LoadingLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import BaseLoading from './components/BaseLoading.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    MainLayout,
    LoadingLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
  html
    height 100%
    margin 0
    padding 0
  body
    margin 0
    padding 0
  #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff
    background-color #15202b
    height inherit
</style>
