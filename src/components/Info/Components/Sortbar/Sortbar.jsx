import React from 'react';
import styles from './Sortbar.module.css';
import List from "../List/List.jsx";

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
            data: this.OriginData
        };
    }

    cmp = (a, b) => {
        return (a.thumbs <= b.thumbs) ? 1 : -1;
    }

    switch2Thumb = ()=> {
        this.setState({
            data: this.SortData
        });
    }

    switch2Default = ()=> {
        this.setState({
            data: this.OriginData
        });
    }

    delete = () => {
        this.setState({
            count: this.state.count-1
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
                        <List data={this.state.data} type={this.displayType} onDelete={this.delete.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortbar;