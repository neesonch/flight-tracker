import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "typeface-roboto";
import App from "./App";
import worker from "./mocks/browser";

// In production app, would wrap this in env check to ensure that mock service work only inits in dev environment
worker.start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
