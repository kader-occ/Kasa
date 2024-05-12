import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./UI/pages/App/App";
import Navigation from "./router/Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Navigation>
    <App />
  </Navigation>
);
