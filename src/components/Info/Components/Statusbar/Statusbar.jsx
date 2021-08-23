import React from 'react';
import StatusItem from "../../Items/StatusItem/StatusItem.jsx";
import styles from './Statusbar.module.css'

function Statusbar(props) {
    return (
        <div className={styles.statusbar}>
            <div className={styles.statusbar}>
                <StatusItem title={'被点赞数'} count={props.data.thunmbsNum} />
                <StatusItem title={'被收藏数'} count={props.data.collectNum} />
                <StatusItem title={'注册时间'} count={props.data.createDate.slice(0,10)} />
            </div>
        </div>
    );
}


export default Statusbar;