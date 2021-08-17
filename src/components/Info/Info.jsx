import React from "react";
import Nav from "../Nav/Nav.jsx";
import InfoBanner from "./InfoBanner/InfoBanner.jsx";
import InfoSidebar from "./InfoSideBar/InfoSidebar.jsx";
import StatusItem from "./StatusItem/StatusItem.jsx";

import styles from "./info.module.css";

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
                            Status.map(item => {
                                return <StatusItem title={item[0]} count={item[1]} />
                            })
                        }
                    </div>
                    <h3 className={styles.notice}>还什么都没有哦~</h3>
                </div>
            </div>
        </>
    );
}

export default Info;
