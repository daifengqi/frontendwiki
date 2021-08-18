import React from "react";
import Home from "./components/Home/Home.jsx";

import "./normalize.css";

function App() {
  return (
    // CR: 这里没必要用 fragments 组件
    <>
      <Home />
    </>
  );
}

export default App;
