import React from 'react';
import styles from "./info.module.css";

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                <h3 className={styles.notice}>还什么都没有哦~</h3>
            </div>
        );
    }
}

export default Index;