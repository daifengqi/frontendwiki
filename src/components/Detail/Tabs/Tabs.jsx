import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";

function Tabs(props) {
  const [cntTab, setCntTab] = useState("");

  const changeTab = (value) => {
    setCntTab(value);
    props.changeTab(value);
  };
  const [TabsList, setTabsList] = useState([]);

  useEffect(() => {
    let termList = [];
    console.log("tabsList", props.tabs);
    try {
      for (let term in props.tabs[props.title].data) {
        termList.push({ name: term });
      }
      setTabsList([...termList]);
    } catch {
      console.log("hhahahah");
    }
    // 设置默认选择第一个
    try {
      if (cntTab === "") {
        changeTab(termList[0].name);
      }
    } catch {
      console.log("没有标签");
    }
  }, [props.tabs]);

  const RenderList = () => {
    return TabsList.map((tab) => {
      return (
        <li className={styles.tabLink} key={tab.name}>
          {/* <input
            type="radio"
            name="tabList"
            id={tab.name}
            style={{ display: "none" }}
            value={tab.name}
            onChange={(e)=>changeTab(e.target.value)}
          />
          <label htmlFor={tab.name}>{tab.name}</label> */}
          <label
            onClick={() => changeTab(tab.name)}
            className={cntTab === tab.name ? styles.activeTab : ""}
          >
            {tab.name}
          </label>
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
