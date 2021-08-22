import React, { useState,useEffect } from "react";
import styles from "./Tabs.module.css";

function Tabs(props) {
  const [cntTab, setCntTab] = useState("");

  function changeTab(e) {
    setCntTab(e.target.value);
    props.changeTab(e.target.value);
  }
  const [TabsList, setTabsList] = useState([]);

  useEffect(() => {
    let termList = [];
    console.log("tabsList",props.tabs)
    try{
      for (let term in props.tabs[props.title].data) {
        termList.push({ name: term });
      }
      setTabsList([...termList]);
    }
    catch{
      console.log("hhahahah")
    }
    // 设置默认选择第一个
    try {
      setCntTab(termList[0]);
    } catch {
      console.log("没有标签");
    }
  }, [props.tabs]);

  const RenderList = () => {
    return TabsList.map((tab) => {
      return (
        <li className={styles.tabLink} key={tab.name}>
          <input
            type="radio"
            name="tabList"
            id={tab.name}
            style={{ display: "none" }}
            value={tab.name}
            onChange={changeTab}
          />
          <label htmlFor={tab.name}>{tab.name}</label>
        </li>
      );
    });
  };

  return (
    <>
      <ul className={styles.tabsList}>
        <li className={styles.tabTitle}>
          <div>{props.title}</div>
        </li>
        {TabsList.length !== 0 ? RenderList() : <li>当前还没有标签呢</li>}
      </ul>
    </>
  );
}

export default Tabs;
