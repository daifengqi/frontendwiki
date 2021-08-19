import React from 'react';
import styles from './CommentItem.module.css';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const {content, author, date, id, link_id } = this.props;
        return (
            <div className={styles.comment_item}>
                <div className={styles.comment_content}>
                    <h4>在 <span className={styles.comment_title}>样例标题</span> 中<span className={styles.comment_date}>{date}</span></h4>
                    <p>
                        {content}
                    </p>
                </div>

                <div className={styles.comment_footer}>
                    <span>#{id}</span>
                    <span>{author}</span>
                </div>
            </div>
        );
    }
}

export default CommentItem;