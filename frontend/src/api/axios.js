import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const getLaunchersAPI = () => API.get("/launchers");


export const createLaunchersAPI = (data) => API.post("/launchers" , data);

export const getLaunchersByIdAPI = (id) => API.get(`/launchers/${id}`);

export const DeleteLaunchersByIdAPI = (id) => API.delete(`/launchers/${id}`);

export const UpdateLaunchersByIdAPI = (id , data) => API.put(`/launchers/${id}` , data);
