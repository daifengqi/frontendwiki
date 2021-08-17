import React from "react";
import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./InfoBanner/InfoBanner.jsx";
import InfoSidebar from "./InfoSideBar/InfoSidebar.jsx";

import styles from "./info.module.css";

function Info() {
  return (
    <>
      <Nav page={'Info'}/>
      <InfoBanner />
      <div className={styles.container}>
        <InfoSidebar />
        <div className={styles.content}>
            <h3 className={styles.notice}>还什么都没有哦~</h3>
        </div>
      </div>
    </>
  );
}

export default Info;
