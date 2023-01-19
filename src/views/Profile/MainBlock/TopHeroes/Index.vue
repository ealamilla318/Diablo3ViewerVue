<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHeroe con datos como prop -->
        <TopHeroe :hero="hero" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHeroe from './TopHeroe.vue'
export default {
  name: 'TopHeroes',
  components: { TopHeroe },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
