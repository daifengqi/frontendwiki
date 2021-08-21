import React, { useState } from "react";
import styles from "./Links.module.css";
import commonStyles from "../common.module.css";

import good from "@/public/image/good.png";
import star from "@/public/image/star.png";
import edit from "@/public/image/edit.png";
import goodActive from "@/public/image/good_active.png";
import starActive from "@/public/image/star_active.png";
import copy from "@/public/image/copy.png";

import { Tooltip, message, Modal } from "antd";

import AddLinkModal from "../addLinkModal/AddLinkModal.jsx";

function Links(props) {
  const [cntLink, setCntLink] = useState("1123");

  const [isModalVisible, setIsModalVisible] = useState(false);

  function changeLink(url) {
    setCntLink(url);
    // console.log(url);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const addLink = () => {
    console.log("添加");
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <ul className={styles.linksList}>
        {props.linkList.map((link) => {
          return (
            <li
              key={link.url}
              onClick={() => changeLink(link.url)}
              className={styles.link}
            >
              <div className={styles.linkContent}>
                <div className={styles.iconBox}>
                  <Tooltip placement="bottom" title="点击复制链接">
                    <img
                      src={copy}
                      alt="copy-icon"
                      className={commonStyles.icon}
                      onClick={() => copyUrl(link.url)}
                    />
                  </Tooltip>
                  <img
                    src={cntLink === "1123" ? goodActive : good}
                    alt="good"
                    className={commonStyles.icon}
                  />
                  <span className={commonStyles.smallText}>12312</span>
                  <img src={star} alt="star" className={commonStyles.icon} />
                  <span className={commonStyles.smallText}>123</span>
                </div>
                <div>
                  <div className={styles.linkDesc}>{link.desc}</div>
                  <div className={styles.linkText}>{link.url}</div>
                </div>
              </div>
              <div className={styles.bottomLine}></div>
            </li>
          );
        })}
        <img
          src={edit}
          alt="edit-icon"
          className={styles.iconBtn}
          onClick={() => showModal()}
        />
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={addLink}
          onCancel={handleCancel}
        >
          <AddLinkModal />
        </Modal>
      </ul>
    </>
  );
}

export default Links;
