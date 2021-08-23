import React from "react";
import styles from "./InfoSidebar.module.css";

import { Link } from 'react-router-dom';

function InfoSidebar() {
    return (
        <>
            <div className={styles.Sidebar}>
                <div className={styles.Item}>
                    <ul>
                        <li><Link to="/my/post">我的发布</Link></li>
                        <li><Link to="/my/favorite">我的收藏</Link></li>
                        <li><Link to="/my/like">我的点赞</Link></li>
                    </ul>
                </div>

                <div className={styles.Item}>
                    <ul>
                        <li><Link to="/my/comment">我的评论</Link></li>
                        <li ><Link to="/my/history">浏览历史</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default InfoSidebar;