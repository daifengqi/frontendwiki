import React from "react";
import styles from "./index.module.css";
import { useState } from "react";
import axios from "axios";
import Detail from "../../Detail/Detail.jsx";

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.nodeContain}>
        <div
          onClick={() => {
            this.props.changeNodeID(this.props.data.id);
          }}
          className={
            styles.treeNodeMain +
            " flexCenter " +
            (this.props.data.id === this.props.showNodeID
              ? styles.treeNodeMainActive
              : "")
          }
          style={styleMap[this.props.data.level]}
        >
          {this.props.data.content}
        </div>
        {this.props.data.id === this.props.showNodeID ? (
          <>
          <div className={styles.showNodeArea}>
            <Detail />
          </div>
          <div className="mask" onClick={() => {
            this.props.changeNodeID(this.props.data.id);
          }}></div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
  componentDidMount() {}
  shouldComponentUpdate(next) {
    if (!next.showNodeID) return true;
    if (this.props.data.id === next.showNodeID) return true;
    if (this.props.data.id === next.lastID) return true;
    return false;
  }
}
class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNodeID: null,
      data: [],
    };
  }
  componentDidMount() {
    this.getTreeData();
  }
  getTreeData() {
    axios
      .get("/treeNodeData")
      .then((res) => {
        this.setState({
          data: res,
        });
      })
      .catch((e) => {
        this.setState({
          data: [
            {
              content: "CSS",
              id: "1",
              level: 0,
              childrens: [
                {
                  content: "动画属性",
                  id: "1-1",
                  level: 1,
                  childrens: [
                    {
                      content: "transition",
                      id: "1-1-1",
                      level: 2,
                      childrens: [],
                    },
                    {
                      content: "animation",
                      id: "1-1-2",
                      level: 2,
                      childrens: [],
                    },
                    {
                      content: "贝塞尔函数",
                      id: "1-1-3",
                      level: 2,
                      childrens: [],
                    },
                  ],
                },
                { content: "选择器", id: "1-2", level: 1, childrens: [] },
              ],
            },
            {
              content: "HTML",
              id: "2",
              level: 0,
              childrens: [
                {
                  content: "标签集",
                  id: "2-1",
                  level: 1,
                  childrens: [
                    { content: "div", id: "2-1-1", level: 2, childrens: [] },
                  ],
                },
                { content: "规范", id: "2-2", level: 1, childrens: [] },
              ],
            },
            { content: "React", id: "3", level: 0, childrens: [] },
            { content: "JS", id: "4", level: 0, childrens: [] },
          ],
        });
      });
  }
  changeNodeID(id) {
    this.setState({
      showNodeID: this.state.showNodeID === id ? null : id,
      lastID: this.state.showNodeID,
    });
  }
  getNode(data) {
    return data.map((item) => {
      return (
        <div key={item.id} className="flexRowNone">
          <TreeNode
            data={item}
            showNodeID={this.state.showNodeID}
            lastID={this.state.lastID}
            changeNodeID={this.changeNodeID.bind(this)}
          />
          <div className="flexColumnNone">{this.getNode(item.childrens)}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <>{this.state.data.length == 0 ? <></> : this.getNode(this.state.data)}</>
    );
  }
}
const styleMap = [
  {
    color: "#ccc",
    "--shadowColor--":"#409EFF50"
  },
  {
    color: "#ccc",
    "--shadowColor--":"#F56C6C50"
  },
  {
    color: "#ccc",
    "--shadowColor--":"#67c23a50"
  },
  {
    color: "#ccc",
    "--shadowColor--":"#E6A23C50"
  },
  {
    color: "#ccc",
    "--shadowColor--":"#90939920"
  },
];
export { Tree };
