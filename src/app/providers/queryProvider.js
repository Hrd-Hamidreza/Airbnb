//! ---------------------------------------- Import
import { QueryClient } from "@tanstack/react-query";
//! ---------------------------------------- Query
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      gtc: 100 * 1000,
      retry: 3,
    },
  },
});
