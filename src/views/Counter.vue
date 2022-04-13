<template>
  <h1>Counter Vue</h1>
  <h2>{{ counter }}</h2>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "Counter",
  props: {},
  emits: [],

  setup() {
    const { counter, increase, decrease } = useCounter();

    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style>
</style>