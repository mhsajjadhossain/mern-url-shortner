import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { UrlContextsProvider } from "./context/UrlsContexts";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UrlContextsProvider>
        <App />
      </UrlContextsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
