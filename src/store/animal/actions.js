import { animalList, emergencyList } from "../../api/animal";

export function getAnimalList({ commit }) {
  animalList().then((res) => {
    commit("setAnimalList", res.data);
  });
}

export async function getEmergencyList({ commit }) {
  await emergencyList().then((res) => {
    commit("setEmergencyList", res.data);
  });
  await commit("setEmergencyFilterList");
}
