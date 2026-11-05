//! ---------------------------------------- Import
import { axiosInstance } from "./axiosInstance";
//! ---------------------------------------- Variables
const url = "auth/register";
//! ---------------------------------------- Functions
//! -------------------- registerApi
export async function registerApi(payLoad) {
  const { data } = await axiosInstance.post(url, payLoad, {
    skipAuth: true,
  });
  return data;
}
//! -------------------- logOutApi
export async function logOutApi() {
  const { data } = await axiosInstance.post(`auth/logout`, {
    skipAuth: false,
  });
  return data;
}
