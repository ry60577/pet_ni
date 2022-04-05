export function setAnimalList(state, payload) {
  state.animalList = payload;
}

export function setEmergencyList(state, payload) {
  state.emergencyList = payload.filter((item) => item.IsEmergencyDepartment);
}

export function setEmergencyLocation(state, location) {
  switch (location) {
    case "north":
      state.emergencyLocation = [
        "臺北市",
        "新北市",
        "桃園市",
        "新竹市",
        "新竹縣",
        "苗栗縣",
      ];
      break;
    case "middle":
      state.emergencyLocation = ["臺中市", "彰化縣", "雲林縣", "南投縣"];
      break;
    case "south":
      state.emergencyLocation = ["嘉義縣", "臺南市", "高雄市", "屏東縣"];
      break;
    case "east":
      state.emergencyLocation = ["宜蘭縣", "花蓮縣", "臺東縣"];
      break;
    default:
      state.emergencyLocation = [
        "臺北市",
        "新北市",
        "桃園市",
        "新竹市",
        "新竹縣",
        "苗栗縣",
      ];
      break;
  }
}

export function setEmergencyFilterList(state) {
  state.emergencyFilterList = []; // inital data
  const filterList = state.emergencyList.filter((item) =>
    state.emergencyLocation.includes(item.City)
  );
  for (const location of state.emergencyLocation) {
    const list = filterList.filter((item) => item.City === location);
    if (list.length > 0) {
      state.emergencyFilterList.push({ city: location, list: list });
    }
  }
}
