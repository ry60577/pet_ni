import { request } from "./api";

const animalList = async () => {
  const res = await request.get("/animal_api?UnitId=QcbUEzN6E6DL");
  return res;
};

const emergencyList = async () => {
  const res = await request.get("/emergency_api/Veterinary/Json");
  return res;
};

export { animalList, emergencyList };
