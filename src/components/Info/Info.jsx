import React from "react";
import {HashRouter as Router} from 'react-router-dom';
import { renderRoutes } from "react-router-config";

import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./Components/Banner/InfoBanner.jsx";
import InfoSidebar from "./Components/SideBar/InfoSidebar.jsx";
import StatusItem from "./Items/StatusItem/StatusItem.jsx";

import styles from "./info.module.css";

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        if(!localStorage.getItem("profile"))
        {
            console.log('未登录');
        }
    }

    render() {
        let Status = [
            ['点赞次数',63],
            ['被点赞次数',76],
            ['收藏数',88],
            ['被收藏数',1673]
        ];

        let Userdata = {
            id: '0.o',
            Username: '未登录',
            Avatar: 'https://gravatar.loli.top/avatar/avatar/bc3ac8bffa2f5b90b23b3b3f3f4396a1?s=200&d=mm&r=g',
        };

        const { route } = this.props;
        return (
            <>
                <Nav/>
                <InfoBanner Userdata={Userdata}/>
                <div className={styles.container}>
                    <InfoSidebar/>
                    <div className={styles.content}>
                        <div className={styles.statusbar}>
                            {
                                Status.map((item) => {
                                    return <StatusItem key={item[0]} title={item[0]} count={item[1]} />
                                })
                            }
                        </div>

                        <div className={styles.main}>
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
