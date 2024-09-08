import ReactDOM from "react-dom/client";
// import "./index.css";

import React from "react";
import { QueryProvider } from "./providers/QueryProvider";
import Context from "./context/Context";
import { Toaster } from "./components/ui/toaster";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <Context>
        <Toaster />
        <App />
      </Context>
    </QueryProvider>
  </React.StrictMode>
);
