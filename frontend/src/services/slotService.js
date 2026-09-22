import { apiRequest } from "./api";
export const getSlots = (parkingId) => apiRequest(`/parking/${parkingId}/slots`);
