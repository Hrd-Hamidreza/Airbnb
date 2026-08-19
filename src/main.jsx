//! ---------------------------------------- Import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import App from "/src/App";
//! ---------------------------------------- Create App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
