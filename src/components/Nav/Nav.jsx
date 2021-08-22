import React from "react";
import classNames from 'classnames';
import styles from "./nav.module.css";

import {useLocation} from 'react-router-dom';
import Menu from "./menu.jsx";

function Nav() {
    let navStyle = [styles.nav];

    try {
        let Location = useLocation();
        navStyle.push(styles.dark)
    }
    catch (error){
        console.log('非个人页面')
    }

    function showMenu() {
        try {
            let Location = useLocation();
            let list = [
                {
                    title: '登录/注册',
                    path: '/login'
                }
            ];
            if(localStorage.getItem("profile"))
            {
                list = [
                    {
                        title: '更新信息',
                        path: '/my/update'
                    },
                    {
                        title: '登出',
                        path: '/my/logout'
                    }
                ];
            }

            return (<Menu data={list}/>);
        }
        catch (error){
            return '';
        }
    }


    return (
        <>
            <div className={classNames(navStyle)}>
                <div className={styles.navContent}>
                    <a href="./index.html" className={classNames(styles.navElement, styles.left)}>
                        Frontend Wiki
                    </a>
                    <div>
                        <a className={classNames(styles.navElement, styles.right)} href="./index.html">
                            主页
                        </a>
                        <span className={classNames(styles.navElement, styles.right, styles.user)} >
                            <a href="./user.html">个人</a>
                            {showMenu()}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Nav;
