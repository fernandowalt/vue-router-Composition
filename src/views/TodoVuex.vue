<template>
  <h1>Lista de tareas de thanos</h1>
  <h4>Tareas:{{ pending.length }}</h4>

  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <hr />

  <button @click="isOpen = true">Crear</button>

  <Modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:body>
      <h4>{{ formText }}</h4>
      <form
        @submit.prevent="
          createTodo(formText);
          isOpen = false;
          formText = '';
        "
      >
        <input type="text" placeholder="Nueva Tarea" v-model="formText" />

        <button>Crear</button>
      </form>
    </template>
  </Modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import useTodos from "../composables/useTodos";

export default {
  components: {
    Modal,
  },
  setup() {
    const { currentTab, pending, getTodosByTab, toggleTodo, createTodo } =
      useTodos();
    const isOpen = ref(false);
    const formText = ref("");

    return {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      isOpen,
      formText,
      createTodo,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}
.completed {
  text-decoration: line-through;
}
</style>