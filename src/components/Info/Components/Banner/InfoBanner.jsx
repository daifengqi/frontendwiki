import React from "react";
import styles from "./InfoBanner.module.css";
import {Skeleton} from "antd";

function InfoBanner(props) {
    function loading(){
        if (props.Userdata.username === '加载中')
            return <Skeleton.Input style={{ width: 200 }} active />
        else
            return <h3>{props.Userdata.username}<span>#{props.Userdata.id}</span></h3>
    }

    return (
        <>
            <div className={styles.InfoBanner}>
                <div className={styles.Container}>
                    <div className={styles.Content}>
                        <img
                            src={props.Userdata.avatar}
                            alt={props.Userdata.username}
                            className={styles.Avatar}
                        />
                        <div className={styles.UserInfo}>
                            {loading()}
                            <p>Talk is cheap, show me your code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoBanner;