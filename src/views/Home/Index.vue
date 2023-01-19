<template>
  <div class="home">
    <home-title/>
    <HomeForm/>
  </div>
</template>

<script>
import HomeForm from './HomeForm.vue'
import HomeTitle from './HomeTitle.vue'
export default {
  name: 'Home',
  components: { HomeTitle, HomeForm }
}
</script>
