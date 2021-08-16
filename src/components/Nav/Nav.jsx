import React from "react";
import styles from "./nav.module.css";

function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <a className={styles.navElement} href="./index.html">
          主页 Homepage
        </a>
        <a className={styles.navElement} href="./user.html">
          个人 Info
        </a>
      </div>
    </>
  );
}

export default Nav;
