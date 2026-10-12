//! ---------------------------------------- Import
import { getDestinationsData } from "@/api";
import { getPropertiesDataById } from "@/api";
import { INSPIRATION_TAB_LABELS, inspirationsData } from "@/data";
//! ---------------------------------------- Function
//! -------------------- destinationsService
export const destinationsService = () => {
  return getDestinationsData();
};
//! -------------------- filteredDestinationsData
export const filteredDestinationsData = (data) => {
  return data?.data?.filter((property) => property.properties_count !== 0);
};
//! -------------------- PropertiesService
export const propertiesService = (id) => {
  return getPropertiesDataById(id);
};
//! -------------------- inspirationsService
export const inspirationsService = () => {
  return { inspirationsData, inspirationsLabels: INSPIRATION_TAB_LABELS };
};
