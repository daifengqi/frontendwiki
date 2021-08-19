import React from "react";
import styles from "./InfoBanner.module.css";

function InfoBanner() {
    return (
        <>
            <div className={styles.InfoBanner}>
                <div className={styles.Container}>
                    <div className={styles.Content}>
                        <img
                            src="https://gravatar.loli.top/avatar/avatar/bc3ac8bffa2f5b90b23b3b3f3f4396a1?s=200&d=mm&r=g"
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