import React from 'react';
import styles from './Sortbar.module.css';
import List from "../List/List.jsx";

class Sortbar extends React.Component {

    constructor(props) {
        super(props);
        let {data} = this.props;
        let [...OriginData] = data;
        this.state = {
            Display: OriginData,
            Thumb: data.sort(this.cmp),
            Default: OriginData,
        };
    }

    cmp = (a, b) => {
        if (a.thumbs < b.thumbs)
            return 1;
        else if (a.thumbs > b.thumbs)
            return -1;
        else
            return 0;
    }

    switch2Thumb = ()=> {
        this.setState({
            Display: this.state.Thumb
        });
    }

    switch2Default = ()=> {
        this.setState({
            Display: this.state.Default
        })
    }

    render() {
        return (
            <div className={styles.Sortbar}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <span onClick={this.switch2Thumb.bind(this)}>最多点赞</span>
                        <span onClick={this.switch2Default.bind(this)}>最新发布</span>
                    </div>
                    <div className={styles.right}>
                        共 {this.state.data.length} 项
                    </div>
                </div>
                <div className={styles.content}>
                    <List data={this.state.Display}/>
                </div>
            </div>
        );
    }
}

export default Sortbar;