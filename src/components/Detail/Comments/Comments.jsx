import React, { useState } from "react";
import styles from "./Comments.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png";

function Comments(props) {
  return (
    <>
      <ul className={styles.commentList}>
        {props.commentList.map((comment) => {
          return (
            <li key={comment.id} className={styles.commentBox}>
              <div className={styles.topPart}>
                <span className={styles.title}>{comment.publisher}</span>
                <span className={styles.smallTitle}>{comment.updateTime}</span>
                <span>
                  <img src={good} alt="good" className={commonStyles.icon} />
                </span>
              </div>
              <div className={styles.content}>{comment.content}</div>
            </li>
          );
        })}
        <div className={[styles.commentBox, styles.comment].join(" ")}>
          <div className={styles.topPart}>
            <span className={styles.title}>我要发送评论</span>
          </div>
          <div className={styles.content}>
            <textarea
              className={styles.textArea}
              type="text"
              name="commentText"
            />
            <div className={[styles.btn,styles.commentBtn].join(" ")}>评论</div>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Comments;
