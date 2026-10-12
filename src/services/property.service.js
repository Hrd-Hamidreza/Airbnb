//! ---------------------------------------- Import
import { getPropertyDataById } from "@/api";
//! ---------------------------------------- Variables
export const propertyService = (id) => {
  return getPropertyDataById(id);
};
