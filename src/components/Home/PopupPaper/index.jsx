import React from "react";
import styles from "./index.module.css";
import Detail from "../../Detail/Detail.jsx";
function PopupPaper(){
    return (
        <div className={styles.PopupPaper}>
            <div className={styles.popupContain}>
                <Detail/>
            </div>
        </div>
    )
}
function PopupLeft(props){
    return(
        <div className={styles.popupLeft}>
            {props.popupData.content}
        </div>
    )
}

export {PopupPaper,PopupLeft}