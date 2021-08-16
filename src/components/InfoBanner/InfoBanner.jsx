import React from "react";
import styles from "./InfoBanner.module.css";

function InfoBanner() {
    return (
        <>
            <div className={styles.InfoBanner}>
                <div className={styles.Container}>
                    <div className={styles.Content}>
                        <img
                            src="https://gravatar.loli.top/avatar/87e0f8d2f0f70987061cec6376cb7f97?s=200&r=G&d="
                            alt="Username"
                            className={styles.Avatar}
                        />
                        <div className={styles.UserInfo}>
                            <h3>Username<span>#3647</span></h3>
                            <p>Talk is cheap, show me your code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoBanner;