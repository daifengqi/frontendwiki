import React from 'react';
import styles from './CommentItem.module.css';
import axios from "axios";
import classNames from "classnames";
import { Popconfirm, message } from 'antd';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    delete = ()=> {
        //axios发送请求
        axios({
            method: 'delete',
            url: 'http://t.mitsuha.space:8001/api/v1/comment/delete',
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
            },
            data: {
                commentId: this.props.id,
            }
        }).then(r=>{
            if(r.data.data.message === this.props.id+'评论删除成功')
            {
                message.success('删除成功');
                let {onDelete} = this.props;
                onDelete(this.props.id, 'comments');
            }
        }).catch(e=>{
            console.log(e)
            message.error('删除失败'+e);
        })
    }

    render() {
        const {content, author, date, id, link_id } = this.props;
        return (
            <div className={classNames("animate__animated", "animate__fadeIn", styles.comment_item)}>
                <div className={styles.comment_content}>
                    <h4>在 <span className={styles.comment_title}>{link_id}</span> 中<span className={styles.comment_date}>{date.slice(0,10)}</span></h4>
                    <p>
                        {content}
                    </p>
                </div>

                <div className={styles.comment_footer}>
                    <span>#{id}</span>
                    <div>
                        <Popconfirm
                            title="确定要删除吗"
                            onConfirm={this.delete}
                            okText="是"
                            cancelText="否"
                        >
                            <span className={styles.comment_delete} onClick={this.toDelete}>删除</span>
                        </Popconfirm>
                        <span>{author}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentItem;