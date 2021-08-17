import React from "react";
import styles from "./InfoSidebar.module.css";

function InfoSidebar() {
    return (
        <>
            <div className={styles.Sidebar}>
                <div className={styles.Item}>
                    <ul>
                        <li><a href="">我的发布</a></li>
                        <li><a href="">我的收藏</a></li>
                        <li><a href="">我的点赞</a></li>
                    </ul>
                </div>

                <div className={styles.Item}>
                    <ul>
                        <li><a href="">我的评论</a></li>
                        <li><a href="">浏览历史</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InfoSidebar;