/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './Like.module.css';
import {getThumbedLinks} from "../../../../api";
import common from '../../info.module.css';
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";
import classNames from "classnames";
import {Skeleton} from "antd";

class Like extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("profile")) {
            this.state = {
                status: true,
                token: '',
                data: [],
                gotData: false
            };
        } else {
            this.state = {
                status: false,
                token: '',
                data: [],
                gotData: true
            };
        }
    }

    componentDidMount(){
        if(localStorage.getItem("profile")) {
            //axios获取数据
            getThumbedLinks(JSON.parse(localStorage.getItem('profile')).user.id)
                .then(r=>{
                    this.setState({
                        token: JSON.parse(localStorage.getItem("profile")).token,
                        data: r.data.data,
                        gotData: true
                    });
                })
                .catch(e=>{
                    console.log(e);
                })
        }
    }

    display = ()=>{
        if(this.state.status){
            if(this.state.gotData === false)
                return <Skeleton active />;
            return <Sortbar data={this.state.data} displayType={"link"}/>;
        }

        return <p className={common.notice}>请先登录~</p>
    }

    render() {
        return (
            <div className={classNames(styles.MyLike, common.subPageTitle)}>
                <h3>我的点赞👍</h3>
                {this.display()}
            </div>
        );
    }
}

export default Like;