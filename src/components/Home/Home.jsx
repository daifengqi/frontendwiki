import React, { useState } from "react";
import HomeHead from "./HomeHead/index.jsx";
import HomeMain from "./HomeMain/index.jsx";
import styles from "./home.module.css";
import 'antd/dist/antd.css'

export var shareFunc={

}
function Home() {
  const [headShow,setHeadShow]=useState(true);
  const [showParcel, setParcel] = useState(false);
  shareFunc.setParcel=setParcel;
  return (
    <>
      {showParcel ? <div className={styles.parcel}></div> : <></>}
      {
        headShow?<HomeHead />:<></>
      }
      <HomeMain setHeadShow={setHeadShow}/>
    </>
  );
}

export default Home;
