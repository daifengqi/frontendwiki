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
    }

    render() {
        let data = [
            {
                title: "跑路从入门到精通",
                author: "Jostar",
                thumbs: 27,
                tag: "CSS",
                url: "https://github.com",
                intro: "老东西，你的替身最没用了",
            },
            {
                title: "坠机从入门到精通",
                author: "Joseph",
                thumbs: 65,
                tag: "CSS",
                url: "https://github.com",
                intro: "老东西，你的替身最最没用了",
            },
            {
                title: "不 良 少 年",
                author: "Jotaro",
                thumbs: 18,
                tag: "JS",
                url: "https://github.com",
                intro: "亚卡吗西！",
            },
            {
                title: "深入理解石鬼面",
                author: "DIO",
                thumbs: 685,
                tag: "HTML",
                url: "https://github.com",
                intro: "Kono Dio da!",
            },
            {
                title: "EVA驾驶指南",
                author: "shinji",
                thumbs: 97,
                tag: "TS",
                url: "https://github.com",
                intro: "不能逃避不能逃避不能逃避...",
            },
            {
                title: "EVA自爆指南",
                author: "Ayanami",
                thumbs: 870,
                tag: "TS",
                url: "https://github.com",
                intro: "世纪之笑在这里",
            },
            {
                title: "测试Item",
                author: "Jostar",
                thumbs: 27,
                tag: "other",
                url: "https://github.com",
                intro: "老东西，你的替身最没用了",
            },
            {
                title: "测试Item",
                author: "Jostar",
                thumbs: 27,
                tag: "other",
                url: "https://github.com",
                intro: "老东西，你的替身最没用了",
            },
            {
                title: "测试Item",
                author: "Jostar",
                thumbs: 27,
                tag: "other",
                url: "https://github.com",
                intro: "老东西，你的替身最没用了",
            },
            {
                title: "测试Item",
                author: "Jostar",
                thumbs: 27,
                tag: "other",
                url: "https://github.com",
                intro: "老东西，你的替身最没用了",
            },
        ];
        return (
            <div className={classNames(common.subPageTitle, styles.MyPost)}>
                <h3>我的发布👋</h3>
                <Sortbar data={data}/>
            </div>
        );
    }
}

export default Post;