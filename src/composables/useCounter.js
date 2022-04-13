import { ref } from "vue";

const useCounter = () => {
  const counter = ref(0);

  return {
    counter,

    //metodos
    increase: () => counter.value++,
    decrease: () => counter.value--,
  };
};

export default useCounter;
