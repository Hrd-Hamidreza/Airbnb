//! ---------------------------------------- Import
import axios from "axios";
//! ---------------------------------------- Variables
export const axiosInstance = axios.create({
  baseURL: "https://airbnb-api.devminds.ir/api/v2",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
//! ---------------------------------------- Request
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);
//! ---------------------------------------- Response
axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error),
);
