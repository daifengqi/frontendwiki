import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <>
    <div className={styles.backBlock+" flexCenter"}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>前端维基 Frontend Wiki</h1>
        <p>
          前端维基是一个前端知识库索引，通过建立一个树状知识结构组织的前端知识学习资料链接索引，
          对知识领域进行分档、标签化归类，让用户可通过点赞、评论等方式推荐出该领域下的优质资源。
        </p>
      </div>
      <HomeBottom/>
    </div>
    <HomeMain/>
    </>
  );
}
function HomeBottom(){
  return(
    <div className={styles.homeBottom+" flexCenter"}>
      <svg t="1629011076670" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4663" width="144" height="128"><path d="M166.912 799.744q-28.672 28.672-69.12 28.672t-69.12-28.672q-29.69599999-28.672-29.696-68.608t29.696-68.608l382.976-380.928q12.288-14.336 30.72-19.968t38.912-4.608 40.448 8.704 34.304 22.016l376.832 374.784q29.69599999 28.672 29.696 68.608t-29.696 68.608q-14.336 14.336-32.256 21.504t-36.864 7.168-37.376-7.168-32.768-21.504l-313.344-309.248z" p-id="4664" fill="#ffffff88"></path></svg>
    </div>
  )
}

export {Home};