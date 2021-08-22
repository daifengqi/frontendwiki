import React, { useState } from "react";
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

import { likeLinkActionk ,createLinkAction} from "@/src/actions/linkActions.js";

function Links(props) {
  const dispatch = useDispatch();

  // 当前选择的链接
  const [cntLink, setCntLink] = useState("");
  // 显示对话框
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 新添加链接的信息
  const [cntAddLinkData, setAddLinkData] = useState({});

  const likeLink = useSelector((state) => state.linkReducer.likeLink);

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
   * TODO:还没实现
   */
  const addLink = () => {
    console.log("cntAddLinkData", cntAddLinkData);
    // {
    //       "creator":"test12newa1",
    //       "creatorId":100003,
    //       "term":"tes23t",
    //       "url":"http:32//www.baidu.com",
    //       "tag": "test32",
    //       "intro":"简介32"
    // }
    dispatch(createLinkAction({
      "creator":JSON.parse(localStorage.getItem("profile")).user.username,
      "creatorId":JSON.parse(localStorage.getItem("profile")).user.id,
      "tag":cntAddLinkData.tab,
      "url":cntAddLinkData.url,
      "intro":cntAddLinkData.desc,
      "term":props.cntTerm
    }))
    setIsModalVisible(false);
  };

  // 点赞链接
  const thumbLink = (id) => {
    dispatch(likeLinkActionk(id));
  };

  // 渲染链接列表
  const RenderList = () => {
    return props.linkList.map((link) => {
      return (
        <li
          key={link.url}
          onClick={() => changeLink(link.id)}
          className={styles.link}
        >
          <div className={styles.linkContent}>
            <div className={styles.iconBox}>
              <img
                src={copy}
                alt="copy-icon"
                className={commonStyles.icon}
                onClick={() => copyUrl(link.url)}
              />
              <img
                src={cntLink === "1123" ? goodActive : good}
                alt="good"
                className={commonStyles.icon}
                onClick={()=>thumbLink(link.id)}
              />
              <span className={commonStyles.smallText}>{link.thumbNums}</span>
              <img src={star} alt="star" className={commonStyles.icon} />
              <span className={commonStyles.smallText}>0</span>
            </div>
            <div>
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
        {props.linkList.length !== 0 ? RenderList() : <li>当前还没有链接呢</li>}
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
        >
          <AddLinkModal changeAddLinkData={changeAddLinkData} />
        </Modal>
      </ul>
    </>
  );
}

export default Links;
