import React, { useState } from "react";
import styles from "./Links.module.css";

function Links(props) {

    const [cntLink, setCntLink] = useState("")

    function changeLink(url) {
        setCntLink(url)
        console.log(url)
    }

    return (
        <>
            <ul className={styles.linksList}>
                {props.linkList.map((link) => {
                    return (
                        <li key={link.url} onClick={() => changeLink(link.url)}>
                            <div className={styles.link}>
                                <a target="_blank" className={styles.linkText} href={link.url}>{link.url}</a>
                                <div className={styles.linkDesc}>{link.linkDesc}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default Links;
