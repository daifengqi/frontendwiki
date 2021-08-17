import React from "react";
import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./InfoBanner/InfoBanner.jsx";
import InfoSidebar from "./InfoSideBar/InfoSidebar.jsx";
import StatusItem from "./StatusItem/StatusItem.jsx";

import styles from "./info.module.css";

import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Page1(){
    return <h2>page1</h2>;
}

function Page2(){
    return <h2>page2</h2>
}

function Info() {
    let Status = [
        ['点赞次数',63],
        ['被点赞次数',76],
        ['收藏数',88],
        ['被收藏数',1673]
    ];

    return (
        <>
            <Nav page={'Info'}/>
            <InfoBanner/>
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

                    <Router>
                        <Link to="/">首页</Link>
                        <Link to="/about">关于</Link>
                        <Link to="/profile">我的</Link>

                        <Route path="/about" component={Page1} />
                        <Route path="/profile" component={Page2} />
                    </Router>

                    <h3 className={styles.notice}>还什么都没有哦~</h3>
                </div>
            </div>
        </>
    );
}

export default Info;
