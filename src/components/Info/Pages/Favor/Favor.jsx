/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import classNames from "classnames";
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";

import styles from './Favor.module.css';
import common from "../../info.module.css";


class Favor extends React.Component {
    constructor(props) {
        super(props);
        if(!localStorage.getItem("profile")) {
            this.state = {
                status: false,
                token: '',
                data: []
            };
        } else {
            //axios获取数据
            let data = [];

            this.state = {
                status: true,
                token: JSON.parse(localStorage.getItem("profile")).token,
                data: data
            };
        }
    }

    display = ()=>{
        if(this.state.status){
            return <Sortbar data={this.state.data} displayType={"link"}/>;
        }

        return <p className={common.notice}>请先登录~</p>
    }

    render() {
        return (
            <div className={classNames(styles.MyFavor, common.subPageTitle)}>
                <h3>我的收藏♥️</h3>
                {this.display()}
            </div>
        );
    }
}

export default Favor;