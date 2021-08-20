import React, { useState } from "react";
import styles from "./Tabs.module.css"

function Tabs(props) {
    const [cntTab, setCntTab] = useState("")

    function changeTab(e) {
        setCntTab(e.target.value)
    }

    return (
        <>
            <ul className={styles.tabsList}>
                <li className={styles.tabTitle}><div>{props.title}</div></li>
                {props.tabs.map((tab) => {
                    return (
                        <li className={styles.tabLink} key={tab.name}>
                            <input type="radio" name="tabList" id={tab.name} style={{ display: "none" }} value={tab.name} onChange={changeTab} />
                            <label htmlFor={tab.name}>{tab.name}</label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Tabs;