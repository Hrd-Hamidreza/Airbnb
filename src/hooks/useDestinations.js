//! ---------------------------------------- Import
import { queryKeys } from "@/data";
import { destinationsService } from "@/services";
import { useQuery } from "@tanstack/react-query";
//! ---------------------------------------- Hook (useDestinations)
export const useDestinations = (options = {}) =>
  useQuery({
    queryKey: queryKeys.destinations,
    queryFn: destinationsService,
    ...options,
  });
