/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './Post.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.MyPost}>
                <h3>我的发布👋</h3>
            </div>
        );
    }
}

export default Post;