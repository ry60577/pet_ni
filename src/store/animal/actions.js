import { animalList, emergencyList } from "../../api/animal";
import emergencyLists from "../../api/emergecy.json";

export function getAnimalList({ commit }) {
  animalList().then((res) => {
    commit("setAnimalList", res.data);
  });
}

export async function getEmergencyList({ commit }) {
  if (process.env.NODE_ENV === "production") {
    await commit("setEmergencyList", emergencyLists);
  } else {
    await emergencyList().then((res) => {
      commit("setEmergencyList", res.data);
    });
  }
  await commit("setEmergencyFilterList");
}
