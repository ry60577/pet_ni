import { animalList } from "../../api/animal";

export function getAnimalList({ commit }) {
  animalList().then((res) => {
    commit("setAnimalList", res.data);
  });
}
