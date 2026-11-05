//! ---------------------------------------- Import
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import { App, store } from "@/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/app";
import { Provider } from "react-redux";
//! ---------------------------------------- Create App
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
);
