<template>
    <div style="height:100%" class="container">
      <header-bar/>
        <router-view/>
      <footer-bar/>
    </div>
</template>

<script>
import FooterBar from '@/components/Footer/Index'
import HeaderBar from '@/components/HeaderBar/Index'
export default {
  name: 'MainLayout',
  components: { FooterBar, HeaderBar }
}
</script>
