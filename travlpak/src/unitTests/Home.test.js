import React from "react";
import ReactDOM from "react-dom";
import Home from "../components/Home";

test("it works", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Home />, root);
});
