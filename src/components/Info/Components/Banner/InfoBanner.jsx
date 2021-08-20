import React from "react";
import styles from "./InfoBanner.module.css";

function InfoBanner(props) {
    return (
        <>
            <div className={styles.InfoBanner}>
                <div className={styles.Container}>
                    <div className={styles.Content}>
                        <img
                            src={props.Userdata.Avatar}
                            alt={props.Userdata.Username}
                            className={styles.Avatar}
                        />
                        <div className={styles.UserInfo}>
                            <h3>{props.Userdata.Username}<span>#{props.Userdata.id}</span></h3>
                            <p>Talk is cheap, show me your code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoBanner;