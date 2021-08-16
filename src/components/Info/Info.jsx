import React from "react";
import Nav from "../Nav/Nav.jsx";

import styles from "./info.module.css";

function Info() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <p>Hello，这个页面用作写用户信息个人页面。</p>
      </div>
    </>
  );
}

export default Info;
