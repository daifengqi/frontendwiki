import React from "react";
import styles from "./nav.module.css";

function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navContent}>
          <a href="./index.html" className={styles.navElement}>
            Frontend Wiki
          </a>
          <div>
            <a className={styles.navElement} href="./index.html">
              主页
            </a>
            <a className={styles.navElement} href="./user.html">
              个人
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
