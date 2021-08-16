import React from "react";
import Nav from "../Nav/Nav.jsx";
import InfoBanner from "../InfoBanner/InfoBanner.jsx";
import InfoSidebar from "../InfoSidebar/InfoSidebar.jsx";

import styles from "./info.module.css";

function Info() {
  return (
    <>
      <Nav />
      <InfoBanner />
      <div className={styles.container}>
        <InfoSidebar />
      </div>
    </>
  );
}

export default Info;
