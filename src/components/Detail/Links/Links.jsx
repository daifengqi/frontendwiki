import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Links.module.css";
import commonStyles from "../common.module.css";

// 图标
import good from "@/public/image/good.png";
import star from "@/public/image/star.png";
import edit from "@/public/image/edit.png";
import goodActive from "@/public/image/good_active.png";
import starActive from "@/public/image/star_active.png";
import copy from "@/public/image/copy.png";

import { message, Modal } from "antd";

// 添加链接对话框
import AddLinkModal from "../addLinkModal/AddLinkModal.jsx";

import {
  likeLinkActionk,
  createLinkAction,
  collectLinkAction,
} from "@/src/actions/linkActions.js";

function Links(props) {
  const dispatch = useDispatch();
  const [linkList, setLinkList] = useState([]);
  // 当前选择的链接
  const [cntLink, setCntLink] = useState("");
  // 显示对话框
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 新添加链接的信息
  const [cntAddLinkData, setAddLinkData] = useState({});

  // const likeLink = useSelector((state) => state.linkReducer.likeLink);

  // 改变当前激活标签
  function changeLink(id) {
    setCntLink(id);
    props.changeLink(id);
  }
  /**
   * 复制链接
   * @param {path} url 要复制到剪切板的链接
   */
  function copyUrl(url) {
    if (window.clipboardData) {
      window.clipboardData.setData("text", url);
    } else {
      (function (url) {
        document.oncopy = function (e) {
          e.clipboardData.setData("text", url);
          e.preventDefault();
          document.oncopy = null;
        };
      })(url);
      document.execCommand("Copy");
    }
    message.success("复制成功");
  }
  /**
   * 显示对话框
   */
  const showModal = () => {
    setIsModalVisible(true);
  };
  /**
   * 退出对话框
   */
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // 改变添加新链接的信息
  const changeAddLinkData = (newData) => {
    setAddLinkData({ ...cntAddLinkData, ...newData });
  };

  /**
   * 添加链接
   */
  const addLink = () => {
    console.log("cntAddLinkData", cntAddLinkData);
    dispatch(
      createLinkAction({
        creator: JSON.parse(localStorage.getItem("profile")).user.username,
        creatorId: JSON.parse(localStorage.getItem("profile")).user.id,
        tag: cntAddLinkData.tab,
        url: cntAddLinkData.url,
        intro: cntAddLinkData.desc,
        term: props.cntTerm,
      })
    );
    // props.updateLinkList()
    setIsModalVisible(false);
  };

  // 点赞链接
  const thumbLink = (index, id, hasThumbed) => {
    if (hasThumbed == false) {
      console.log(props.cntTerm, props.cntTab, id);
      linkList[index].hasThumbed = true;
      linkList[index].thumbNums += 1;
      setLinkList([...linkList]);
      dispatch(likeLinkActionk(props.cntTerm, props.cntTab, id));
      // props.linkList[index].hasThumbed=true
    }
  };
  // 收藏链接
  const collectLink = (index, id, hasCollect) => {
    if (hasCollect == false || hasCollect == null) {
      linkList[index].hasCollect = true;
      linkList[index].collectNums += 1;
      setLinkList([...linkList]);
      dispatch(collectLinkAction(props.cntTerm, props.cntTab, id));
    }
  };

  // useEffect(() => {
  //   setCntLink([...props.linkList]);
  // }, []);

  useEffect(() => {
    if (props.linkList[0]) {
      changeLink(props.linkList[0].id);
    }
    console.log("有改变", props.linkList);
    setLinkList([...props.linkList]);
  }, [props.linkList]);

  // 渲染链接列表
  const RenderList = () => {
    return linkList.map((link, index) => {
      return (
        <li key={link.id} className={styles.link}>
          <div className={styles.linkContent}>
            <div className={styles.iconBox}>
              <img
                src={copy}
                alt="copy-icon"
                className={commonStyles.icon}
                onClick={() => copyUrl(link.url)}
              />
              <img
                src={link.hasThumbed ? goodActive : good}
                alt="good"
                className={commonStyles.icon}
                onClick={() => thumbLink(index, link.id, link.hasThumbed)}
              />
              <span className={commonStyles.smallText}>{link.thumbNums}</span>
              <img
                src={link.hasCollect ? starActive : star}
                alt="star"
                className={commonStyles.icon}
                onClick={() => collectLink(index, link.id, link.hasCollect)}
              />
              <span className={commonStyles.smallText}>{link.collectNums}</span>
            </div>
            <div
              onClick={() => changeLink(link.id)}
              className={styles.linkContentIn}
            >
              <div className={styles.linkDesc}>{link.intro}</div>
              <div className={styles.linkText}>{link.url}</div>
            </div>
          </div>
          <div
            className={
              cntLink === link.id
                ? [styles.bottomLine, styles.active].join(" ")
                : styles.bottomLine
            }
          ></div>
        </li>
      );
    });
  };

  return (
    <>
      <ul className={styles.linksList}>
        {props.linkList && props.linkList.length !== 0 ? (
          RenderList()
        ) : (
          <li>当前还没有链接呢</li>
        )}
        <img
          src={edit}
          alt="edit-icon"
          className={styles.iconBtn}
          onClick={() => showModal()}
        />
        <Modal
          title="添加链接"
          visible={isModalVisible}
          onOk={addLink}
          onCancel={handleCancel}
          destroyOnClose
        >
          <AddLinkModal changeAddLinkData={changeAddLinkData} />
        </Modal>
      </ul>
    </>
  );
}

export default Links;
