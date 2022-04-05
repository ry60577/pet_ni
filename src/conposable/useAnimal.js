import { useStore } from "vuex";

export const useAnimal = () => {
  const store = useStore();

  const getAnimalList = () => {
    store.dispatch("animal/getAnimalList");
  };

  const getEmergencyList = async () => {
    await store.dispatch("animal/getEmergencyList");
  };

  const setEmergencyLocation = async (location) => {
    await store.commit("animal/setEmergencyLocation", location);
  };

  const getEmergencyFilterList = async () => {
    await store.commit("animal/setEmergencyFilterList");
  };

  return {
    getAnimalList,
    getEmergencyList,
    setEmergencyLocation,
    getEmergencyFilterList,
  };
};
