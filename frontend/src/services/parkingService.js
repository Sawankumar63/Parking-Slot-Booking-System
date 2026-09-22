import { apiRequest } from "./api";
export const getParking = () => apiRequest("/parking");
export const getParkingById = async (id) => {
  const data = await getParking();
  return data.parking?.find(item => String(item.id) === String(id));
};
