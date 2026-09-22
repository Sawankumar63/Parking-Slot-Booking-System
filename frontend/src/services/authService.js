import { apiRequest } from "./api";
export const loginUser = (credentials) => apiRequest("/login", { method:"POST", body:JSON.stringify(credentials) });
export const registerUser = (user) => apiRequest("/register", { method:"POST", body:JSON.stringify(user) });
export const getProfile = () => apiRequest("/profile");
export const logoutUser = () => localStorage.removeItem("token");
