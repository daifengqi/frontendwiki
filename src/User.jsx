import React from "react";
import Info from "./components/Info/Info.jsx";

import "./normalize.css";

function User() {
  return (
    // CR: 没必要用 fragment 组件
    <>
      <Info />
    </>
  );
}

export default User;
