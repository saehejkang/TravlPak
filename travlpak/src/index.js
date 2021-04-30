import React from "react";
import ReactDOM from "react-dom";
import "./toBeDeleted/index.css";
import App from "./App";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.css";
import RegisterSuccess from "./components/RegisterSuccess";
import LogIn from "./components/LogIn";
//import SearchPreferences from "./components/SearchPreferences";

ReactDOM.render(
  <React.StrictMode>
    <RegisterSuccess />
  </React.StrictMode>,
  document.getElementById("root")
);
