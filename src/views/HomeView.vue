import { ref } from 'vue';
<template>
  <div class="home">
    <h1>{{ iroman }}</h1>
    <h1>{{ hulk }}</h1>

    <button @click="changeIroman">cambiar Iroman</button>
    <br />
    <button @click="changeHulk">cambiar Hulk</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  setup() {
    const iroman = ref({ name: "tony", age: 50 });
    const hulk = reactive(5);

    return {
      iroman,
      hulk,

      changeIroman: () => {
        iroman.value.name = "tonyStark";
        iroman.value.age = 52;
      },
      changeHulk: () => {
        hulk = 10;
      },
    };
  },
};
</script>
