import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Navigation from "./router/Navigation";
import App from "./ui/pages/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Navigation>
    <App />
  </Navigation>
);
