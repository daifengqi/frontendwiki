import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Detail.module.css";

import Tabs from "./Tabs/Tabs.jsx";
import Links from "./Links/Links.jsx";
import Comments from "./Comments/Comments.jsx";

import { getLinkListAction } from "@/src/actions/linkActions.js";
import { getCommentListAction } from "@/src/actions/commentAction.js";
function Detail(props) {
  const dispatch = useDispatch();
  // 链接列表
  const storeLinksList = useSelector((state) => state.linkReducer.linkList);
  // 标签列表
  const [tabsList, setTabsList] = useState([]);
  // 词条title
  const [title, setTitle] = useState(props.data.content);
  // 评论
  const commentList = useSelector((state) => state.commentReducer);
  // 当前选择的标签
  const [cntTab, setCntTab] = useState("");
  // 当前选择的链接ID
  const [cntUrl, setCntUrl] = useState("");
  const [linksList, setLinkList] = useState([]);

  // 初始化
  useEffect(() => {
    // 初始化链接列表，标签列表
    dispatch(getLinkListAction(props.data.content));
  }, []);

  // 更新评论列表
  useEffect(() => {
    if (cntUrl !== "") {
      dispatch(getCommentListAction(cntUrl));
    }
  }, [cntUrl]);

  // 更新链接列表
  useEffect(() => {
    if (cntTab !== "") {
      setLinkList(storeLinksList[props.data.content].data[cntTab]);
    }
  }, [cntTab]);

  // 当前选择的标签
  const changeTab = (tab) => {
    setCntTab(tab);
  };

  // 当前选择的链接
  const changeLink = (ID) => {
    setCntUrl(ID);
  };

  return (
    <div className={styles.detailPage}>
      <Tabs title={title} tabs={storeLinksList} changeTab={changeTab} />
      <Links linkList={linksList} changeLink={changeLink} />
      <Comments commentList={commentList} />
    </div>
  );
}

export default Detail;
