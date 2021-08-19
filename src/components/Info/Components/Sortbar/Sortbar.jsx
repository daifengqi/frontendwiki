import React from 'react';
import styles from './Sortbar.module.css';

class Sortbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Sortbar}>
                <div className={styles.left}>
                    <span>最多点赞</span>
                    <span>最新发布</span>
                </div>
                <div className={styles.right}>
                    共 777 项
                </div>
            </div>
        );
    }
}

export default Sortbar;