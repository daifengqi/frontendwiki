import React from "react";
import { HashRouter as Router } from 'react-router-dom';
import {renderRoutes} from "react-router-config";

import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./Banner/InfoBanner.jsx";
import InfoSidebar from "./SideBar/InfoSidebar.jsx";
import StatusItem from "./StatusItem/StatusItem.jsx";

import styles from "./info.module.css";

class Info extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let Status = [
            ['点赞次数',63],
            ['被点赞次数',76],
            ['收藏数',88],
            ['被收藏数',1673]
        ];

        const { route } = this.props;
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
                            { renderRoutes(route.routes) }
                        </Router>
                        <h3 className={styles.notice}>还什么都没有哦~</h3>
                    </div>
                </div>
            </>
        );
    }
}

export default Info;
