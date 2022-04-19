<template>
  <h1>aprendiendo slots</h1>
  <button @click="openModal">abrir modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="hola mundo">
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">cerrar</button>
    </template>
    <template v-slot:header>
      <h2>Titulo del modal</h2>
    </template>
    <template v-slot:exposed="slotProps">
      <h2>{{ slotProps }}</h2>
    </template>
  </Modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);

    const openModal = () => (isOpen.value = true);

    const closeModal = () => (isOpen.value = false);

    return {
      isOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
</style>