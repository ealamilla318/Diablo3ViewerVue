<template>
  <div class="home-title text center">
    <h1 v-diablo:bone class="my-5 font-diablo">Diablo 3 buscador de perfil</h1>
    <p class="lead text-muted">
      Ingresa tu
      <em>
        <a
          href="https://eu.battle.net/support/es/article/75767"
          target="_blank"
          title="Format: YourProfile#1234"
        >
          Battletag
        </a>
        y selecciona la region de tu perfil
      </em>
    </p>
    <hr class="mt-5" />
  </div>
</template>

<script>
export default {
  name: 'HomeTitle'
}
</script>
