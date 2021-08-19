/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './History.module.css';
import Sortbar from "../Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../info.module.css";

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames(common.subPageTitle, styles.MyPost)}>
                <h3>我的历史</h3>
                <Sortbar />
            </div>
        );
    }
}

export default History;