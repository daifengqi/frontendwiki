/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import styles from './MyFavor.module.css';

class MyFavor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.MyFavor}>
                <h3>我的收藏♥</h3>
            </div>
        );
    }
}

export default MyFavor;