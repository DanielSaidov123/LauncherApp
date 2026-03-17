import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});

export const getLaunchersAPI = () => API.get("/launchers");

export const createLaunchersAPI = (data) => API.post("/launchers", data);

export const getLaunchersByIdAPI = (id) => API.get(`/launchers/${id}`);

export const DeleteLaunchersByIdAPI = (id) => API.delete(`/launchers/${id}`);

export const UpdateLaunchersByIdAPI = (id, data) =>
  API.put(`/launchers/${id}`, data);

export const getAllUsersAPI = () => API.get("/auth/getAllUsers");

export const loginAPI = (data) => API.post("auth/login", data);

export const rgisterAPI = (data) => API.post("auth/register/create", data);
