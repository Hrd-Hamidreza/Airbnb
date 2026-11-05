//! ---------------------------------------- Import
import { store } from "@/app";
import { AUTH_STORAGE_KEYS } from "@/data";
import { logOut } from "@/features";
import {
  getDataFromLocalStorage,
  removeFromLocalStorage,
  setDataToLocalStorage,
} from "@/utils";
import axios from "axios";
//! ---------------------------------------- Variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AUTH_ACCESS = AUTH_STORAGE_KEYS.ACCESS_TOKEN;
const AUTH_REFRESH = AUTH_STORAGE_KEYS.REFRESH_TOKEN;
const AUTH_USER = AUTH_STORAGE_KEYS.USER;
let refreshPromise = null;
//! ---------------------------------------- Axios Instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//! ---------------------------------------- Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Skip authentication
    if (config.skipAuth) return config;

    // Get access token
    const token = getDataFromLocalStorage(AUTH_ACCESS);

    // Attach access token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);

//! ---------------------------------------- Response Interceptor

axiosInstance.interceptors.response.use(
  // Successful Response
  (response) => response,

  // Failed Response
  async (error) => {
    const originalRequest = error.config;

    //! ---------------------------------------- Check Request

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      originalRequest.skipAuth
    ) {
      return Promise.reject(error);
    }

    // Prevent infinite retry
    originalRequest._retry = true;

    //! ---------------------------------------- Refresh Token

    if (!refreshPromise) {
      refreshPromise = (async () => {
        // Get refresh token
        const refreshToken = getDataFromLocalStorage(AUTH_REFRESH);

        if (!refreshToken) {
          throw new Error("Refresh token is missing");
        }

        // Send refresh request
        const response = await axios.post(
          `${BASE_URL}/auth/refresh`,
          {
            refresh_token: refreshToken,
          },
          {
            timeout: 5000,
          },
        );

        // Extract new access token
        const accessToken = response.data?.data?.access_token;

        if (!accessToken) {
          throw new Error("Unable to refresh token");
        }

        // Save new access token
        setDataToLocalStorage(AUTH_ACCESS, accessToken);

        return accessToken;
      })()
        //! ---------------------------------------- Refresh Error

        .catch((refreshError) => {
          // Clear LocalStorage
          store.dispatch(logOut());
          throw refreshError;
        })

        //! ---------------------------------------- Reset Promise

        .finally(() => {
          refreshPromise = null;
        });
    }

    //! ---------------------------------------- Wait For Refresh

    const accessToken = await refreshPromise;

    //! ---------------------------------------- Retry Original Request

    originalRequest.headers = originalRequest.headers ?? {};

    originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    return axiosInstance(originalRequest);
  },
);
