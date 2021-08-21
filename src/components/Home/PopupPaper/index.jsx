import React from "react";
import styles from "./index.module.css";
import Detail from "../../Detail/Detail.jsx";
import {shareFunc} from '../Home.jsx';

function PopupPaper() {
  return (
    <div className={styles.PopupPaper}>
      <div className={styles.popupContain}>
        <Detail />
      </div>
    </div>
  );
}
function PopupLeft(props) {
  return (
    <div className={styles.popupLeft + " flexCenter"}>
      <span>{props.popupData.content}</span>
      <div
        className={styles.backButton}
        onClick={() => {
          shareFunc.setParcel(true);
          setTimeout(() => {
            props.popupControl({ id: null, content: null });
            document
              .getElementById("mainContent")
              .scrollIntoView();
          }, 360);
          setTimeout(()=>{
            shareFunc.setParcel(false);
          },1500)
        }}
      >
        返回
      </div>
    </div>
  );
}

export { PopupPaper, PopupLeft };
