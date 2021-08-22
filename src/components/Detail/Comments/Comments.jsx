import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Comments.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png";

import { createCommentAction } from "@/src/actions/commentAction.js";
import { message } from "antd";

function Comments(props) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  const createComment = () => {
    console.log("start new comment");
    if(props.cntUrl===""){
      message.success("请选择链接后再评论")
      return;
    }
    dispatch(
      createCommentAction({
        linkId: props.cntUrl,
        content: newComment,
      })
    );
    setNewComment("")
    props.updateCommentList();

  };

  return (
    <>
      <ul className={styles.commentList}>
        {/* <li>{props.cntUrl === "" ? "empty" : "unEmpty"}</li> */}
        {props.commentList.data.map((comment) => {
          return (
            <li key={comment.id} className={styles.commentBox}>
              <div className={styles.topPart}>
                <div className={styles.title}>{comment.publisher}</div>
                <div className={styles.smallTitle}>{comment.updateTime}</div>
                <img src={good} alt="good" className={commonStyles.icon} />
                <div className={commonStyles.smallText}>12312</div>
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
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div
              className={[styles.btn, styles.commentBtn].join(" ")}
              onClick={createComment}
            >
              评论
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Comments;
