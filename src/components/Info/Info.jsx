import React from "react";
import {HashRouter as Router} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import {getUserInfo} from "../../api";
import 'antd/dist/antd.css';

import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./Components/Banner/InfoBanner.jsx";
import InfoSidebar from "./Components/SideBar/InfoSidebar.jsx";

import styles from "./info.module.css";
import Statusbar from "./Components/Statusbar/Statusbar.jsx";
import 'antd/dist/antd.css'
import classNames from "classnames";

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;

        //Default Userdata
        if(localStorage.getItem("profile"))
        {
            this.state = {
                Userdata:{
                    id: '',
                    username: '加载中',
                    avatar: 'https://gravatar.loli.top/avatar/avatar/bc3ac8bffa2f5b90b23b3b3f3f4396a1?s=200&d=mm&r=g',
                    thunmbsNum: 0,
                    collectNum: 0,
                    createDate: '0000-00-00'
                }
            };
        }
        else
        {
            this.state = {
                Userdata:{
                    id: '',
                    username: '未登录',
                    avatar: 'https://gravatar.loli.top/avatar/avatar/bc3ac8bffa2f5b90b23b3b3f3f4396a1?s=200&d=mm&r=g',
                    thunmbsNum: 0,
                    collectNum: 0,
                    createDate: '0000-00-00'
                }
            };
        }

    }

    componentDidMount(){
        if(!localStorage.getItem("profile"))
        {
            this.setState({
                username: '未登录'
            })
        }
        else
        {
            getUserInfo(JSON.parse(localStorage.getItem('profile')).user.id).then(r=>{
                this.setState({
                    Userdata: r.data.data
                });
            }).catch(e=>{
                console.log(e);
            });
        }
    }

    render() {
        const { route } = this.props;
        return (
            <>
                <Nav/>
                <InfoBanner Userdata={this.state.Userdata}/>
                <div className={styles.container}>
                    <InfoSidebar/>
                    <div className={styles.content}>
                        <Statusbar data={this.state.Userdata}/>
                        <div className={classNames(styles.main,"animate__animated", "animate__fadeIn")}>
                            <Router>
                                { renderRoutes(route.routes) }
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Info;
