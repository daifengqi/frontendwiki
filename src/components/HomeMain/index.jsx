import React from "react";
import styles from "./index.module.css";
import {TreeNode,Tree} from '../TreeNode/TreeNode.jsx';

function HomeMain(){
    return (
        <div id="mainContent" className={styles.homeMainContain+" flexColumn"}>
            <div className={styles.homeMain}>
                <Tree/>
            </div>
        </div>
    )
}
export default HomeMain;