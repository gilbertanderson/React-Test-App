import React from "react";
import ReactDOM from "react-dom";
import Users from "../components/Users";

describe("crash report", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Users />, div);
  });
});
