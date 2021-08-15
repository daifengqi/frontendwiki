import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>前端维基 Frontend Wiki</h1>
        <p>
          前端维基是一个前端知识库索引，通过建立一个树状知识结构组织的前端知识学习资料链接索引，
          对知识领域进行分档、标签化归类，让用户可通过点赞、评论等方式推荐出该领域下的优质资源。
        </p>
      </div>
    </>
  );
}

export default Home;
