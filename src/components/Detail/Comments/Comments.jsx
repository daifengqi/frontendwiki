import React, { useState } from "react";
import styles from "./Comments.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png"

function Comments(props) {
  return (
    <>
      <ul className={styles.commentList}>
        {props.commentList.map((comment) => {
          return (
            <li key={comment.id} className={styles.commentBox}>
              <div className={styles.topPart}>
                <span className={styles.publisher}>{comment.publisher}</span>
                <span className={styles.time}>{comment.updateTime}</span>
                <span>
                  <img src={good} alt="good" className={commonStyles.icon} />
                </span>
              </div>
              <div className={styles.content}>{comment.content}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
