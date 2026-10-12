//! ---------------------------------------- Import
import { queryKeys } from "@/data";
import { propertyService } from "@/services";
import { useQuery } from "@tanstack/react-query";
//! ---------------------------------------- Function (useProperty)
export const useProperty = (id) =>
  useQuery({
    queryKey: queryKeys.property(id),
    queryFn: () => propertyService(id),
  });
