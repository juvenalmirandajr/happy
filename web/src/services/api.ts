import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_SERVER_URL,
});

export default api;
