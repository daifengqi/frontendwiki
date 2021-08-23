import React from 'react';
import styles from './LinkItem.module.css';
import "animate.css";
import {getUserInfo} from "../../../../api";
import classNames from "classnames";

class LinkItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            author: '加载中'
        }
    }

    delete = ()=> {
        if(!window.confirm("确定要删除吗？"))
            return ;
        //axios发送请求
        //...
        let {onDelete} = this.props;
        onDelete(this.props.id, 'links');
        window.alert('删除成功');
    }

    componentDidMount() {
        getUserInfo(this.props.author).then(r=>{
            this.setState({
                author: r.data.data.username
            })
        }).catch(e=>{
            console.log(e)
        })
    }

    render() {
        {/*<div className={styles.delete} onClick={this.delete}>*/}
        {/*    <span>删除</span>*/}
        {/*</div>*/}
        const {title, thumbs, tag, url, intro, id} = this.props;
        return (
                    <div className={classNames("animate__animated", "animate__fadeIn", styles.link_item)} id={'link-'+id}>
                        <a href={url} target={"_blank"}>
                            <div className={styles.container}>
                                <div className={styles.header}>
                                    <h4>{title}
                                        <span>
                                        <svg t="1629680837361" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg" p-id="2107" width="200" height="200"><path
                                            d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
                                            fill="#7A8596" p-id="2108"></path><path
                                            d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
                                            fill="#7A8596" p-id="2109"></path></svg>
                                            {thumbs}
                                    </span>
                                    </h4>
                                </div>
                                <div className={styles.content}>
                                    <p>{intro}</p>
                                </div>
                                <div className={styles.footer}>
                                    <span>{this.state.author}</span>
                                    <span className={styles.tag}>#{tag}</span>
                                </div>
                            </div>
                        </a>
                    </div>
        );
    }
}

export default LinkItem;