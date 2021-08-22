import React from 'react';
import styles from './Sortbar.module.css';
import List from "../List/List.jsx";
import common from "../../info.module.css";

class Sortbar extends React.Component {

    constructor(props) {
        super(props);
        this.displayType = props.displayType;
        this.OriginData = props.data;
        this.SortData = [];
        for (let i = 0; i < props.data.length; i++) {
            this.SortData.push(props.data[i]);
        }
        this.SortData = this.SortData.sort(this.cmp);
        this.state = {
            count: this.OriginData.length,
            data: this.OriginData,
            type: 'default'
        };
    }

    cmp = (a, b) => {
        return (a.w_link.thumbs <= b.w_link.thumbs) ? 1 : -1;
    }

    switch2Thumb = ()=> {
        this.setState({
            data: this.SortData,
            type: 'sort'
        });
    }

    switch2Default = ()=> {
        this.setState({
            data: this.OriginData,
            type: 'default'
        });
    }

    deleteItem = (id, arr) => {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].w_link.id === id) {
                if(i===0)
                    arr.shift();
                else if(i===arr.length-1)
                    arr.pop();
                else
                    arr.slice(i,1);
            }
        }
    }

    delete = (id) => {
        console.log('删除:'+id);
        this.deleteItem(id, this.SortData);
        this.deleteItem(id, this.OriginData);

        this.setState({
            count: this.state.count - 1,
            data: (this.state.type === 'default'?this.OriginData:this.SortData)
        })
    }

    render() {
        return (
            <div className={styles.Sortbar}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <span onClick={this.switch2Thumb.bind(this)} style={{display: ((this.displayType === 'comments') ? 'none' : 'inline-block')}}>最多点赞</span>
                        <span onClick={this.switch2Default.bind(this)}>默认排序</span>
                    </div>
                    <div className={styles.right}>
                        共 {this.state.count} 项
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.section}>
                        {(this.state.data.length === 0)? <p className={common.notice}>还什么都没有噢</p>:''}
                        <List data={this.state.data} type={this.displayType} onDelete={this.delete.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortbar;