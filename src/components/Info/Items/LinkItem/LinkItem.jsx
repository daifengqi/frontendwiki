import React from 'react';
import styles from './LinkItem.module.css';

class LinkItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    delete = ()=> {
        if(!window.confirm("确定要删除吗？"))
            return ;
        //axios发送请求
        //...
        let {onDelete} = this.props;
        onDelete(this.props.id);
        window.alert('删除成功');
    }

    render() {
        const {title, author, thumbs, tag, url, intro} = this.props;
        return (
            <div className={styles.link_item}>
                <a href={url} target={"_blank"}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h4>{title}
                                {/*<span>*/}
                                {/*    <svg t="1629342948934" className="icon" viewBox="0 0 1024 1024" version="1.1"*/}
                                {/*         xmlns="http://www.w3.org/2000/svg" p-id="2102" width="200" height="200"><path*/}
                                {/*        d="M918.016 478.208c16.896-18.432 22.528-43.52 14.848-67.584-7.68-24.064-27.136-40.96-51.712-45.568l-197.632-38.912c-5.632-1.024-10.752-4.608-13.824-10.24l-98.304-175.616c-12.288-22.016-34.304-34.816-59.392-34.816-25.088 0-47.104 12.8-59.392 34.816l-98.304 175.616c-3.072 5.12-8.192 8.704-13.824 10.24l-197.632 38.912c-24.576 5.12-44.032 22.016-51.712 46.08s-2.048 49.152 14.848 67.584l136.704 147.968c4.096 4.096 6.144 10.24 5.12 15.872l-24.064 200.192c-3.072 24.576 7.68 48.64 27.648 63.488 19.968 14.848 46.08 17.408 68.608 6.656l182.784-84.48c5.632-2.56 11.776-2.56 16.896 0l182.784 84.48c22.528 10.752 48.64 8.192 68.608-6.656 19.968-14.336 30.72-38.912 27.648-63.488l-24.064-199.68c-0.512-6.144 1.024-11.776 5.12-16.384l138.24-148.48z"*/}
                                {/*        fill="#7A8596" p-id="2103"></path>*/}
                                {/*    </svg>*/}
                                {/*    {thumbs}*/}
                                {/*</span>*/}
                            </h4>
                        </div>
                        <div className={styles.content}>
                            <p>{intro}</p>
                        </div>
                        <div className={styles.footer}>
                            <span>{author}</span>
                            <span className={styles.tag}>#{tag}</span>
                        </div>
                    </div>
                </a>
                <div className={styles.delete} onClick={this.delete}>
                    <span>删除</span>
                </div>
            </div>
        );
    }
}

export default LinkItem;