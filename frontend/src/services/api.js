const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);
console.log(API_URL);

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  

  console.log("Full request URL:", `${API_URL}${endpoint}`);

  const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
};

export { API_URL };
