import React from "react";
import { useState } from "react";

export default function App() {
  const [num, updateNum] = useState(0);
  return (
    <>
      <h1>Webpack React Demo</h1>
      <button
        style={{ width: "360px", height: "200px", fontSize: "50px" }}
        onClick={() => updateNum((num) => num + 1)}
      >
        {num}
      </button>
    </>
  );
}
