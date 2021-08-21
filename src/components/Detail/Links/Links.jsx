import React, { useState } from "react";
import styles from "./Links.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png";
import star from "@/public/image/star.png";
import edit from "@/public/image/edit.png";

function Links(props) {
  const [cntLink, setCntLink] = useState("");

  function changeLink(url) {
    setCntLink(url);
    console.log(url);
  }

  return (
    <>
      <ul className={styles.linksList}>
        {props.linkList.map((link) => {
          return (
            <li
              key={link.url}
              onClick={() => changeLink(link.url)}
              className={styles.link}
            >
              <div className={styles.linkContent}>
                <div>
                  <img src={good} alt="good" className={commonStyles.icon} />
                  <img src={star} alt="star" className={commonStyles.icon} />
                </div>
                <div>
                  <div className={styles.linkDesc}>{link.desc}</div>
                  <div className={styles.linkText}>{link.url}</div>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </li>
          );
        })}
        <img src={edit} alt="edit-icon" className={styles.iconBtn} />
      </ul>
    </>
  );
}

export default Links;
