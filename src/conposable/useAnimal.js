import { useStore } from "vuex";

export const useAnimal = () => {
  const store = useStore();

  const getAnimalList = () => {
    store.dispatch("animal/getAnimalList");
  };
  return {
    getAnimalList,
  };
};
