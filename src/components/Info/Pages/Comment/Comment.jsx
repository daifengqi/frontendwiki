/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './Comment.module.css';
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../../info.module.css";

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames(styles.MyPost, common.subPageTitle)}>
                <h3>我的评论</h3>
            </div>
        );
    }
}

export default Comment;