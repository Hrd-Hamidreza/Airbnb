//! ---------------------------------------- Import
import axios from "axios";
//! ---------------------------------------- Variables
export const axiosInstance = axios.create({
  baseURL: "http://airbnb-api.devminds.ir",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
//! ---------------------------------------- Request
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Rldm1pbmRzLmlyIiwiYXVkIjoiZGV2bWluZHMtY2xpZW50IiwiaWF0IjoxNzgxMDE3NTM5LCJuYmYiOjE3ODEwMTc1MzksImV4cCI6MTc4MTAyNjUzOSwianRpIjoiYjc3NDMyYmJkOTMxNGEwNjI2YTMzNzExOTk2OThkZjYiLCJzdWIiOjQsInJvbGUiOiJob3N0Iiwicm9sZV9uYW1lIjoiaG9zdCJ9.O9Rb598dfC-9oeZ6tI_mW_f74o-yWQglTD05Bat-CjY";
  },
  (error) => Promise.reject(error),
);
//! ---------------------------------------- Response
axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => error,
);
