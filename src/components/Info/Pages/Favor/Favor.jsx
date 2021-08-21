/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from "react";
import {getCollectedLinks, getThumbedLinks} from "../../../../api";
import classNames from "classnames";
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";

import styles from './Favor.module.css';
import common from "../../info.module.css";


class Favor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            token: '',
            data: []
        };
    }

    componentDidMount(){
        if(localStorage.getItem("profile")) {
            //axios获取数据
            getCollectedLinks(JSON.parse(localStorage.getItem('profile')).user.id)
                .then(r=>{
                    this.setState({
                        status: true,
                        token: JSON.parse(localStorage.getItem("profile")).token,
                        data: r.data.data
                    });
                })
                .catch(e=>{
                    console.log(e);
                })
        }
    }

    display = ()=>{
        if(this.state.status){
            if(this.state.data.length === 0)
                return <p className={common.notice}>还什么都没有噢</p>
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