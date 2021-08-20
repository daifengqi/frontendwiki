import React, { useState } from "react";
import styles from "./Comments.module.css";
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
