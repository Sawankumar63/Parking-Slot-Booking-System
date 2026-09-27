import { apiRequest } from "./api";
export const loginUser = (credentials) =>
     apiRequest("/api/login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });


export const registerUser = (user) => 
    apiRequest("/api/register", {
        method: "POST",
        body: JSON.stringify(user),
    });

export const getProfile = () => 
    apiRequest("/api/profile");

export const logoutUser = () =>
    localStorage.removeItem("token");
