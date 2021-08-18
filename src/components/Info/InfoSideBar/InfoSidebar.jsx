import React from "react";
import styles from "./InfoSidebar.module.css";

import { Link } from 'react-router-dom';

function InfoSidebar() {
    return (
        <>
            <div className={styles.Sidebar}>
                <div className={styles.Item}>
                    <ul>
                        <li><Link to="/post">我的发布</Link></li>
                        <li><Link to="/favorite">我的收藏</Link></li>
                        <li><Link to="/like">我的点赞</Link></li>
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