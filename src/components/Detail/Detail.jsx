import React, { useState } from "react";
import styles from "./Detail.module.css";
import Tabs from "./Tabs/Tabs.jsx";
import Links from "./Links/Links.jsx";

function Detail(props) {
  const [linkList, setlinkList] = useState([
    {
      url: "http://www.2huo.tech",
      desc: '2huo home'
    },
    {
      url: "http://www.baidu.com",
      desc: 'baidu com'
    }
  ])

  const [title, setTitle] = useState('react')

  const [tabs, setTabs] = useState(
    [{
      name: 'react-hooks'
    },
    {
      name: 'react-redux'
    },
    {
      name: 'diff算法'
    },
    {
      name: '性能调优'
    },
    {
      name: '合成事件1'
    },
    {
      name: '合成事件2'
    },
    {
      name: '合成事件3'
    },
    {
      name: '合成事件4'
    },
    {
      name: '合成事件5'
    },
    {
      name: '合成事件6'
    },
    {
      name: '合成事件7'
    },
    {
      name: '合成事件8'
    },
    {
      name: '合成事件9'
    },
    {
      name: '合成事件11'
    },
    {
      name: '合成事件12'
    },
    {
      name: '合成事件13'
    },
    {
      name: '合成事件14'
    },
    {
      name: '合成事件15'
    },
    {
      name: '合成事件16'
    },
    {
      name: '合成事件17'
    },
    {
      name: '合成事件18'
    },
    {
      name: '合成事件19'
    },
    {
      name: '合成事件20'
    },
    {
      name: '合成事件21'
    },
    {
      name: '合成事件22'
    },
    {
      name: '合成事件23'
    },
    {
      name: '合成事件24'
    },]
  )

  return (
    <div className={styles.detailPage}>
      <Tabs title={title} tabs={tabs} />
      <Links linkList={linkList} />
      <div className={styles.LinkComment}>这个是描述</div>
    </div>
  );
}

export default Detail;
