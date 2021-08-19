/**
 * @author 季悠然
 * @createDate 2021-08-18
 */
import React from 'react';
import styles from './Comment.module.css';
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../../info.module.css";

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = [
            {
                id: 1,
                linkId: 1,
                creator: 'Exia',
                content: '好！',
                createDate: '2021-8-19',
            },
            {
                id: 2,
                linkId: 1,
                creator: 'Dyname',
                content: '我也好！',
                createDate: '2021-8-19',
            },
            {
                id: 3,
                linkId: 1,
                creator: 'Kyrios',
                content: '我我也好！',
                createDate: '2021-8-19',
            },
            {
                id: 4,
                linkId: 1,
                creator: 'Q',
                content: '很有精神！',
                createDate: '2021-8-19',
            },
            {
                id: 5,
                linkId: 1,
                creator: 'Exia',
                content: '奇怪的评论增加了',
                createDate: '2021-8-19',
            }
        ];

        return (
            <div className={classNames(styles.MyPost, common.subPageTitle)}>
                <h3>我的评论</h3>
                <Sortbar data={data} displayType={'comments'}/>
            </div>
        );
    }
}

export default Comment;