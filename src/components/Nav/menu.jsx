import React from "react";
import {HashRouter as Router, Link} from 'react-router-dom';
import styles from './nav.module.css'

function Menu(props){
    return (
        <div className={styles.Menu}>
            <Router>
                {
                    props.data.map((item,index)=>{
                        return <Link to={item.path} key={index}>{item.title}</Link>;
                    })
                }
            </Router>
        </div>
    );
}

export default Menu;