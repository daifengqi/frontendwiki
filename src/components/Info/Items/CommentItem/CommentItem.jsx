import React from 'react';
import styles from './CommentItem.module.css';
import axios from "axios";

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    delete = ()=> {
        if(!window.confirm("确定要删除吗？"))
            return ;
        //axios发送请求
        axios({
            method: 'delete',
            url: 'http://localhost:8001/api/v1/comment/delete',
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
            },
            data: {
                commentId: this.props.id,
            }
        }).then(r=>{
            if(r.data.data.message === this.props.id+'评论删除成功')
            {
                window.alert('删除成功');
                let {onDelete} = this.props;
                onDelete(this.props.id, 'comments');
            }
        }).catch(e=>{console.log(e)})
    }

    render() {
        const {content, author, date, id, link_id } = this.props;
        return (
            <div className={styles.comment_item}>
                <div className={styles.comment_content}>
                    <h4>在 <span className={styles.comment_title}>{link_id}</span> 中<span className={styles.comment_date}>{date.slice(0,10)}</span></h4>
                    <p>
                        {content}
                    </p>
                </div>

                <div className={styles.comment_footer}>
                    <span>#{id}</span>
                    <div>
                        <span className={styles.comment_delete} onClick={this.delete}>删除</span>
                        <span>{author}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentItem;