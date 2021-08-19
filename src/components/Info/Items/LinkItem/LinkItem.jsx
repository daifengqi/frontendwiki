import React from 'react';
import styles from './LinkItem.module.css';

class LinkItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { title, author, thumbs, tag, url, intro } = this.props;
        return (
            <div className={styles.link_item}>
                <div className={styles.header}>
                    <h4>{title} <span>{thumbs}</span></h4>
                </div>
                <div className={styles.content}>
                    <p>{intro}</p>
                </div>
                <div className={styles.footer}>
                    <span>{author}</span>
                    <span>{tag}</span>
                </div>
            </div>
        );
    }
}

export default LinkItem;