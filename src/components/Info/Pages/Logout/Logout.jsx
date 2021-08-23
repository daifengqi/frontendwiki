import React from "react";
import common from '../../info.module.css'
import classNames from "classnames";
import {Alert} from "antd";

function Logout(){
    //清除本地token数据
    localStorage.removeItem('profile');
    window.setInterval(()=>{
        window.location.href = 'user.html';
    },2000);

    return (
        <>
            <h3 className={classNames(common.notice)}>
                你已登出
                <Alert message="页面将在两秒后刷新" type="info" className={classNames(common.alert)}/>
            </h3>
        </>
    );
}

export default Logout;