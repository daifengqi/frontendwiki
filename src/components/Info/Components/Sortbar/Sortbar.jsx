import React from 'react';
import styles from './Sortbar.module.css';
import List from "../List/List.jsx";

class Sortbar extends React.Component {

    constructor(props) {
        super(props);
        const { data } = this.props;
        this.OriginData = data;
        this.SortData = [];
        for (let i = 0; i < data.length; i++) {
            this.SortData.push(data[i]);
        }
        this.SortData = this.SortData.sort(this.cmp);
        this.state = {
            type: 'default'
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
                        <span onClick={this.switch2Thumb.bind(this)}>最多点赞</span>
                        <span onClick={this.switch2Default.bind(this)}>最新发布</span>
                    </div>
                    <div className={styles.right}>
                        共 {this.OriginData.length} 项
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.section} style={{display: DisplayO}}>
                        <List data={this.OriginData}/>
                    </div>
                    <div className={styles.section} style={{display: DisplayS}}>
                        <List data={this.SortData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sortbar;