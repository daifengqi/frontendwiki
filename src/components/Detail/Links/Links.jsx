import React, { useState } from "react";
import styles from "./Links.module.css";

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
              className={styles.link}
              key={link.url}
              onClick={() => changeLink(link.url)}
            >
              <a target="_blank" className={styles.linkText} href={link.url}>
                <p>{link.url}</p>
              </a>
              <div className={styles.linkDesc}>{link.desc}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Links;
