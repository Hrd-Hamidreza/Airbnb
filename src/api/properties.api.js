//! ---------------------------------------- Import
import { axiosInstance } from "./axiosInstance";
//! ---------------------------------------- Variables
const url = "properties";
//! ---------------------------------------- Functions
//! --------------------
export const getPropertiesDataById = async (id) => {
  const params = {};
  if (id) {
    params.city_id = id;
  }
  const { data, status } = await axiosInstance.get(url, { params });
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return data?.data ?? [];
};
