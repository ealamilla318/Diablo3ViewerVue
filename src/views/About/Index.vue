<template>
  <div class="about-view mb-5">
    <div class="text-center">
      <h1 v-diablo:bone class="my-5">Diablo 3 Buscador de Perfil</h1>

      <hr class="bg-dark mb-5">

      <p class="lead">
        Diablo III es un rpg de accion
      </p>
      <p class="lead">
        <span class="font-weight-bold">D3BP</span> ingresa tu usuario de Battle.net para poder visualizar el perfil
      </p>
    </div>

    <hr class="bg-dark my-5">

    <div class="mt-5">
      <h2 class="mb-4">Limite de la API</h2>
      <b-alert show variant="dark">
        Una cantidad de peticiones excesivas puede provocar retrasos o problemas vea:
        <a href="https://develop.battle.net/documentation/guides/getting-started">Vea la guia de inicio</a> Para mas detalles.
      </b-alert>

      <dl class="row mt-5 text-center text-sm-left">
        <div class="col-sm-6 mb-3">
          <dt>36,000 peticiones por hora</dt>
        </div>

        <div class="col-sm-6">
          <dt>100 peticiones por segundo</dt>
        </div>
      </dl>

    </div>

    <div class="my-5">
      <h2>Guia de inicio a la API de diablo</h2>

      <p>Para usar la API de diablo usted debe:</p>

      <ol>
        <li>Iniciar sesion o crear una cuenta de Battle Net.</li>
        <li>Generar un cliente de acceso en el menu de opciones.</li>
        <li>Crear una Key de acceso.</li>
        <li>Entender como funciona OAUTH para la API.</li>
      </ol>

      <p class="text-break">Lea mas aqui:
        <a href="https://develop.battle.net/documentation/guides/getting-started">https://develop.battle.net/documentation/guides/getting-started</a>
      </p>
    </div>

    <hr>

  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
