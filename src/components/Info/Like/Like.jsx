/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './Like.module.css';
import common from '../info.module.css';
import Sortbar from "../Sortbar/Sortbar.jsx";
import classNames from "classnames";

class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(location);
        return (
            <div className={classNames(styles.MyLike, common.subPageTitle)}>
                <h3>我的点赞👍</h3>
                <Sortbar />
            </div>
        );
    }
}

export default Like;