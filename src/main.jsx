//! ---------------------------------------- Import
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import App from "./app/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./app/providers/queryProvider";
//! ---------------------------------------- Create App
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
