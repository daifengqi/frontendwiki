import React from "react";
import common from '../../info.module.css'
import classNames from "classnames";

function Logout(){
    return (
        <h3 className={classNames(common.notice,"animate__animated", "animate__fadeIn")}>你已登出</h3>
    );
}

export default Logout;