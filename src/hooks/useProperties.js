//! ---------------------------------------- Import
import { useQueries } from "@tanstack/react-query";
import { queryKeys } from "@/data";
import { propertiesService } from "@/services";
//! ---------------------------------------- Hook (useDestinations)
export const useProperties = (destinations = []) =>
  useQueries({
    queries: destinations?.map((city) => ({
      queryKey: queryKeys.properties(city.city_id),
      queryFn: () => propertiesService(city.city_id),
      enabled: destinations.length > 0,
    })),
  });
