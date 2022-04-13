<template>
  <h1 v-if="!pokemon && !errorMessage">Loading...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <div v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />

    <router-link :to="{ name: 'search' }">Search</router-link>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../composables/usePokemon";

export default {
  setup() {
    const route = useRoute();

    const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );

    //watch ejecuta la funcion searchPokemon cuando router.params.id cambia.

    watch(
      () => route.params.id,
      () => searchPokemon(route.params.id)
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("¿esta seguro de abandonar la pagina?");

      if (!answer) return false;
    });

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style>
</style>