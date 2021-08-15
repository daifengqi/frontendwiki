import React from "react";
import styles from "./index.module.css";
import {useState} from 'react';

function HomeMain(showMain){
    return (
        <div id="mainContent" className={styles.homeMainContain+" flexColumn"} style={showMain?{transform:'translateY:-100vh'}:{}}>
            <div className={styles.homeMain}>
                123
            </div>
        </div>
    )
}
export default HomeMain;