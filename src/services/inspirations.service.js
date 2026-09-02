//! ---------------------------------------- Import
import { INSPIRATION_TAB_LABELS, inspirationsData } from "@/data";
//! ---------------------------------------- Functions
export function inspirationsService() {
  return { inspirationsData, inspirationsLabels: INSPIRATION_TAB_LABELS };
}
