//! ---------------------------------------- Import
import { axiosInstance } from "@/api";
import { filteredDestinationsData } from "@/services";
//! ---------------------------------------- Variables
const url = "locations/destinations";
//! ---------------------------------------- Functions
//! --------------------
export const getDestinationsData = async () => {
  const { data, status } = await axiosInstance.get(url);
  if (status !== 200) {
    throw new Error("Server Error");
  }
  return filteredDestinationsData(data);
};
