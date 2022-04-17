import { request } from "./api";
import { ANIMAL_URL, EMERGENCY_URL } from "../api/setting";

const animalList = async () => {
  // const res = await request.get("/animal_api?UnitId=QcbUEzN6E6DL");
  const api =
    process.env.NODE_ENV === "production"
      ? "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
      : `${ANIMAL_URL}?UnitId=QcbUEzN6E6DL`;
  console.log(api);
  const res = await request.get(api);
  return res;
};

const emergencyList = async () => {
  // const res = await request.get("/emergency_api/Veterinary/Json");
  const api =
    process.env.NODE_ENV === "production"
      ? "https://www.afurkid.com/Veterinary/Json"
      : `${EMERGENCY_URL}/Veterinary/Json`;
  const res = await request.get(api, {
    headers: {
      // "Access-Control-Allow-Origin": "https://test.afurkid.com",
      // "Content-Type": "application/x-www-form-urlencoded",
      // crossdomain: true,
    },
  });
  return res;
};

export { animalList, emergencyList };
