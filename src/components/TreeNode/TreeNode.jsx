import React from "react";
import styles from "./index.module.css";
import { useState } from "react";
import "regenerator-runtime/runtime";
import axios from "axios";

function NodeContent(props) {
  return (
    <div className={"flexColumn " + styles.NodeContent}>
      <div className={"flexRow " + styles.LabelContain}>
        {props.labelCollections ? (
          props.labelCollections.map((item) => {
            return (
              <div className={"flexCenter " + styles.labelItem} key={item}>
                {item}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
const styleMap = [
  {
    color: "#ccc",
    boxShadow:"inset #409EFF20 0px 0px 6px 3px"
  },
  {
    color: "#ccc",
    boxShadow:"inset #F56C6C20 0px 0px 6px 3px"
  },
  {
    color: "#ccc",
    boxShadow:"inset #67c23a20 0px 0px 6px 3px"
  },
  {
    color: "#ccc",
    boxShadow:"inset #E6A23C20 0px 0px 6px 3px"
  },
  {
    color: "#ccc",
    boxShadow:"inset #90939920 0px 0px 6px 3px"
  },
];
const lineStyleMap = [
  {
    "--bgColor--": "#409EFFAA",
  },
  {
    "--bgColor--": "#67C23AAA",
  },
  {
    "--bgColor--": "#E6A23CAA",
  },
  {
    "--bgColor--": "#F56C6CAA",
  },
];
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
        {
          this.props.data.id === this.props.showNodeID?
          <div
          className={styles.showNodeArea}
        >
          <NodeContent labelCollections={["CSS", "高阶"]} />
        </div>:<></>
        }
        {this.props.data.level == 0 ? (
          <></>
        ) : (
          <div
            className={styles.nodeLine}
            style={lineStyleMap[this.props.data.level]}
          ></div>
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
    this.getTreeData().then((res) => {
      this.setState({
        data: res,
      });
    });
  }
  async getTreeData() {
    try {
      return await axios({
        url: "http://frontendweiki.org/treeNodeData",
        method: "get",
      });
    } catch (error) {
      console.log(error);
      return await new Promise((rs, rj) => {
        setTimeout(() => {
          rs([
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
          ]);
        }, 300);
      });
    }
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

export { Tree };
