/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import styles from './Favor.module.css';
import Sortbar from "../Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../info.module.css";

class Favor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames(styles.MyFavor, common.subPageTitle)}>
                <h3>我的收藏♥️</h3>
                <Sortbar />
            </div>
        );
    }
}

export default Favor;