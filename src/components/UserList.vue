<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h5>hola mundo</h5>
    </li> -->
    <slot v-for="user in users" :key="user.id" :user="user"> </slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>