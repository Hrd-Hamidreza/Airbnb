//! ---------------------------------------- Import
import { getDestinationsData } from "@/api";
import { getPropertiesDataById } from "@/api";
//! ---------------------------------------- Function
//! -------------------- destinationsService
export const destinationsService = () => {
  return getDestinationsData();
};
//! -------------------- filteredData
export const filteredDestinationsData = (data) => {
  return data?.data?.filter((property) => property.properties_count !== 0);
};
//! -------------------- PropertiesService
export const propertiesService = (id) => {
  return getPropertiesDataById(id);
};
