import { animalList, emergencyList } from "../../api/animal";
import emergencyLists from "../../json_data/emergecy.json";

export function getAnimalList({ commit }) {
  animalList().then((res) => {
    commit("setAnimalList", res.data);
  });
}

export async function getEmergencyList({ commit }) {
  // TODO: Synology web station can't figure out the CORS issue. Using json file to as temporary solution
  if (process.env.NODE_ENV === "production") {
    await commit("setEmergencyList", emergencyLists);
  } else {
    await emergencyList().then((res) => {
      commit("setEmergencyList", res.data);
    });
  }
  await commit("setEmergencyFilterList");
}
