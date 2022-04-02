import { request } from "./api";

const animalList = async () => {
  const res = await request.get("/base_api?UnitId=QcbUEzN6E6DL");
  return res;
};

export { animalList };
