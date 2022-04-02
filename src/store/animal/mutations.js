export function setAnimalList(state, payload) {
  state.animalList = payload;
  localStorage.setItem("animalList", JSON.stringify(payload));
}
