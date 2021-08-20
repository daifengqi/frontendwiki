import React from 'react';
import styles from './Sortbar.module.css';
import List from "../List/List.jsx";

class Sortbar extends React.Component {

    constructor(props) {
        super(props);
        const { data, displayType } = this.props;
        this.displayType = displayType;
        this.OriginData = data;
        this.SortData = [];
        for (let i = 0; i < data.length; i++) {
            this.SortData.push(data[i]);
        }
        this.SortData = this.SortData.sort(this.cmp);
        this.state = {
            type: 'default',
            count: this.OriginData.length
        };
    }

    cmp = (a, b) => {
        return (a.thumbs <= b.thumbs) ? 1 : -1;
    }

    switch2Thumb = ()=> {
        this.setState({
            type: 'sort'
        });
    }

    switch2Default = ()=> {
        this.setState({
            type: 'default'
        });
    }

    delete = () => {
        this.setState({
            count: this.state.count-1
        })
    }

    render() {
        let DisplayO = 'flex';
        let DisplayS = 'none';
        if(this.state.type === 'sort'){
            DisplayO = 'none';
            DisplayS = 'flex';
        }

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
                    <div className={styles.section} style={{display: DisplayO}}>
                        <List data={this.OriginData} type={this.displayType} onDelete={this.delete.bind(this)}/>
                    </div>
                    <div className={styles.section} style={{display: DisplayS}}>
                        <List data={this.SortData} type={this.displayType} onDelete={this.delete.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortbar;