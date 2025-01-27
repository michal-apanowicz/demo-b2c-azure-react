import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./config/msalConfig";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App instance={msalInstance} />
    </BrowserRouter>
  </React.StrictMode>
);
