import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Comments.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png";
import good_active from "@/public/image/good_active.png";

import {
  createCommentAction,
  likeCommentAction,
} from "@/src/actions/commentAction.js";
import { message } from "antd";

function Comments(props) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  // 更新
  useEffect(() => {
    if (
      Array.isArray(props.commentList.data) &&
      props.commentList.data.length !== 0
    ) {
      console.log("当前的commentList", props.commentList.data);
      setCommentList([...props.commentList.data]);
    }
  }, [props.commentList.data]);

  // 创建评论
  const createComment = () => {
    console.log("start new comment");
    if (props.cntUrl === "") {
      message.success("请选择链接后再评论");
      return;
    }
    dispatch(
      createCommentAction({
        linkId: props.cntUrl,
        content: newComment,
      })
    );
    setNewComment("");
    props.updateCommentList();
  };
  // 点赞评论
  const thumbComment = (index, id, hasThumbed) => {
    console.log(hasThumbed);
    if (hasThumbed == false) {
      commentList[index].hasThumbed = true;
      commentList[index].thumbNums += 1;
      setCommentList([...commentList]);
      dispatch(likeCommentAction(props.cntTerm, props.cntTab, id));
    }
  };

  return (
    <>
      <ul className={styles.commentList}>
        {/* <li>{props.cntUrl === "" ? "empty" : "unEmpty"}</li> */}
        {commentList.map((comment, index) => {
          return (
            <li key={comment.id} className={styles.commentBox}>
              <div className={styles.topPart}>
                <div className={styles.title}>{comment.publisher}</div>
                <div className={styles.smallTitle}>{comment.updateTime}</div>
                <img
                  src={comment.hasThumbed ? good_active : good}
                  alt="good"
                  className={commonStyles.icon}
                  onClick={() =>
                    thumbComment(index, comment.id, comment.hasThumbed)
                  }
                />
                <div className={commonStyles.smallText}>
                  {comment.thumbNums}
                </div>
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
