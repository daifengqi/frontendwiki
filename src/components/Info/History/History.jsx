/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './History.module.css';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.MyPost}>
                <h3>我的历史</h3>
            </div>
        );
    }
}

export default History;