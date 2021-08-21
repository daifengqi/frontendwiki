import React, { useState } from "react";
import HomeHead from "./HomeHead/index.jsx";
import HomeMain from "./HomeMain/index.jsx";
import styles from "./home.module.css";

function Home() {
  const [headShow,setHeadShow]=useState(true);
  return (
    <>
      {
        headShow?<HomeHead />:<></>
      }
      <HomeMain setHeadShow={setHeadShow}/>
    </>
  );
}

export default Home;
