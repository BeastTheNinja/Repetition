// Entry point for React-applikationen
// Initialiserer root og renderer App-komponenten med StrictMode for ekstra fejlkontrol
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
