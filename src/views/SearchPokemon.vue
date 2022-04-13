<template>
  <h1>buscar pokemon:</h1>
  <form @submit.prevent="onsubmit(pokemonId)">
    <input
      type="number"
      placeholder="numero del pokèmon"
      autofocus
      v-model="pokemonId"
    />
  </form>
  <br />
  <span>presione enter para buscar</span>
  <h1>{{ pokemonId }}</h1>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter(); //navega a la ruta espeficada en el objeto, se puede usar el nombre de la ruta name: o el path:

    const pokemonId = ref(1);

    return {
      pokemonId,

      onsubmit: () => {
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } }); // push es un metodo de router que me saca de la pagina actual y me manda a la especificada en el objeto
      },
    };
  },
};
</script>

<style>
</style>