import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MovieContextProvider } from "./context/MovieContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>
);
