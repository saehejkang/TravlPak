import React from "react";
import ReactDOM from "react-dom";
import "./toBeDeleted/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "./components/Calendar";

ReactDOM.render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>,
  document.getElementById("root")
);
