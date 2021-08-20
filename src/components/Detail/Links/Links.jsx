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
            // 斯以为此处必须全选
            <a target="_blank" className={styles.linkText} href={link.url}>
              <li key={link.url} onClick={() => changeLink(link.url)}>
                <div className={styles.link}  key={link.url} onClick={() => changeLink(link.url)}>
                  <div className={styles.linkDesc}>{link.desc}</div>
                  <span className={styles.linkText}>{link.url}</span>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </>
  );
}

export default Links;
