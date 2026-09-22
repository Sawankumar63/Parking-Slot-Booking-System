import React, { createContext, useEffect, useState } from "react";
import { getProfile, loginUser, logoutUser, registerUser } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) { setLoading(false); return; }
    getProfile().then(data => setUser(data.user)).catch(() => logoutUser()).finally(() => setLoading(false));
  }, []);

  const login = async credentials => {
    const data = await loginUser(credentials);
    localStorage.setItem("token", data.token);
    const profile = await getProfile();
    setUser(profile.user);
    return data;
  };

  const register = async data => registerUser(data);
  const logout = () => { logoutUser(); setUser(null); };

  return <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: Boolean(user) }}>{children}</AuthContext.Provider>;
};
