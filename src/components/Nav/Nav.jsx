import React from "react";
import classNames from 'classnames';
import styles from "./nav.module.css";

import { HashRouter as Router, Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let navStyle = [styles.nav];
        let loginDisplay = 'none';
        const { page } = this.props;
        if(page === 'Info')
        {
            navStyle.push(styles.dark)
            loginDisplay = 'inline-block';
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
                            <a className={classNames(styles.navElement, styles.right)} href="./user.html">
                                个人
                            </a>

                            <Router>
                                <Link
                                    to="/login"
                                    className={classNames(styles.navElement, styles.right)}
                                    style={{display: loginDisplay}}
                                >登录/注册</Link>
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Nav;
