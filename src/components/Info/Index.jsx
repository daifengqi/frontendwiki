import React from 'react';
import styles from "./info.module.css";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                <h3 className={styles.notice}>点击最左边的菜单看看吧~</h3>
            </div>
        );
    }
}

export default Index;