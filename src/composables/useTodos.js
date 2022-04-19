import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");
  const pending = computed(() => store.getters["pendingTodos"]);
  const all = computed(() => store.getters["allTodos"]);
  const completed = computed(() => store.getters["completed"]);
  const getTodosByTab = computed(() =>
    store.getters["getTodosByTab"](currentTab.value)
  );
  const toggleTodo = (id) => {
    store.commit("toggleTodo", id);
  };

  const createTodo = (text) => {
    store.commit("createTodo", text);
  };

  return {
    all,
    completed,
    currentTab,
    pending,
    getTodosByTab,
    toggleTodo,
    createTodo,
  };
};

export default useTodos;
