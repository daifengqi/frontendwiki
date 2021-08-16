import React from "react";
import styles from "./index.module.css";
import { useState } from "react";

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
  }
  clickNode=e=>{
    console.log(this.props.data.id)
    //修改showNodeID为id；
  }
  render() {
    return (
      <div onClick={this.clickNode}
        className={styles.treeNodeMain + " flexCenter"}
        style={{
          "--bgColor--": this.props.data.bgColor,
          "--color--": this.props.data.color,
        }}
      >
        {this.props.data.content}
      </div>
    );
  }
  componentDidMount() {
    console.log("e");
  }
}

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          bgColor: "red",
          color: "white",
          content: "test1",
          id: "1",
          childrens: [
            {
              bgColor: "red",
              color: "white",
              content: "test20",
              id: "10",
              childrens: [
                {
                  bgColor: "red",
                  color: "white",
                  content: "test30",
                  id: "100",
                  childrens: [],
                },
                {
                  bgColor: "red",
                  color: "white",
                  content: "test31",
                  id: "101",
                  childrens: [],
                },
              ],
            },
            {
                bgColor: "red",
                color: "white",
                content: "test21",
                id: "12",
                childrens: [
                ],
              },
          ],
        },
        {
          bgColor: "red",
          color: "white",
          content: "test1",
          id: "2",
          childrens: [
            {
              bgColor: "red",
              color: "white",
              content: "test22",
              id: "20",
              childrens: [],
            },
          ],
        },
      ],
      showNodeID:"1"
    };
  }
  getNode(data) {
    return data.map((item) => {
      console.log(item);
      return (
        <div key={item.id}>
          <TreeNode data={item} showNodeID={this.state.showNodeID}/>
          <div className="flexRowNone">{this.getNode(item.childrens)}</div>
        </div>
      );
    });
  }
  render() {
    return <>{this.getNode(this.state.data)}</>;
  }
}

export { TreeNode, Tree };
