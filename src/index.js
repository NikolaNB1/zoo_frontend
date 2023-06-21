import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AnimalProvider from "./storage/AnimalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimalProvider>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </AnimalProvider>
  </React.StrictMode>
);
