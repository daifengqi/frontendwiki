import React from "react";
import ReactDOM from "react-dom";
import User from "./User.jsx";

// CR: 为啥这个文件是 js ？
ReactDOM.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
  document.getElementById("root")
);
