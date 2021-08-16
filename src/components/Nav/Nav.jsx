import React from "react";
import classNames from 'classnames';
import styles from "./nav.module.css";

function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navContent}>
          <a href="./index.html" className={classNames(styles.navElement, styles.left)}>
            Frontend Wiki
          </a>
          <div>
            <a className={classNames(styles.navElement, styles.right)} href="./index.html">
              主页
            </a>
            <a className={classNames(styles.navElement, styles.right)} href="./user.html">
              个人
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
