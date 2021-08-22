/**
 * @author 季悠然
 * @createDate 2021-08-18
 */
import React from 'react';
import styles from './Comment.module.css';
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../../info.module.css";
import {getCommentByUid} from "../../../../api";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("profile")) {
            this.state = {
                status: true,
                token: '',
                data: []
            };
        } else {
            this.state = {
                status: false,
                token: '',
                data: []
            };
        }
    }

    componentDidMount(){
        if(localStorage.getItem("profile")) {
            //axios获取数据
            getCommentByUid(JSON.parse(localStorage.getItem('profile')).user.id)
                .then(r=>{
                    this.setState({
                        token: JSON.parse(localStorage.getItem("profile")).token,
                        data: r.data.data
                    });
                })
                .catch(e=>{
                    console.log(e);
                })
        }
    }

    display = ()=>{
        if(this.state.status){
            if(this.state.data.length === 0)
                return <p className={common.notice}>还什么都没有噢</p>
            return <Sortbar data={this.state.data} displayType={"comments"}/>;
        }

        return <p className={common.notice}>请先登录~</p>
    }

    render() {
        return (
            <div className={classNames(styles.MyPost, common.subPageTitle)}>
                <h3>我的评论💬</h3>
                {this.display()}
            </div>
        );
    }
}

export default Comment;