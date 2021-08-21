/**
 * @author 季悠然
 * @date 2021-08-18
 */
import React from 'react';
import styles from './Post.module.css';
import Sortbar from "../../Components/Sortbar/Sortbar.jsx";
import classNames from "classnames";
import common from "../../info.module.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        if(!localStorage.getItem("profile")) {
            this.state = {
                status: false,
                token: '',
                data: []
            };
        } else {
            //axios获取数据
            let data = [
                {
                    id: 1001,
                    title: '测试标题1',
                    thumbs: 100,
                    author: 'youranreus',
                    url: 'https://baidu.com',
                    tag: 'test',
                    intro: '是测试！'
                },
                {
                    id: 1002,
                    title: '测试标题2',
                    thumbs: 101,
                    author: 'youranreus',
                    url: 'https://baidu.com',
                    tag: 'test',
                    intro: '是测试噢！'
                },
            ];

            this.state = {
                status: true,
                token: JSON.parse(localStorage.getItem("profile")).token,
                data: data
            };
        }
    }

    display = ()=>{
        if(this.state.status){
            if(this.state.data.length === 0)
                return <p className={common.notice}>还什么都没有噢</p>
            return <Sortbar data={this.state.data} displayType={"link"}/>;
        }

        return <p className={common.notice}>请先登录~</p>
    }

    render() {
        return (
            <div className={classNames(common.subPageTitle, styles.MyPost)}>
                <h3>我的发布👋</h3>
                {this.display()}
            </div>
        );
    }
}

export default Post;