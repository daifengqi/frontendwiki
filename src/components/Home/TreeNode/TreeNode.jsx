import React from "react";
import styles from "./index.module.css";
import {treeData} from '../../../treeNode/treeNode.js'


class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: false,
      top: 0,
      left: 0,
    };
  }
  render() {
    return (
      <div className={styles.nodeContain}>
        <div
          onClick={(e) => {
            // this.pointShow(e);
            this.props.changeNodeID(this.props.data);
          }}
          className={
            styles.treeNodeMain +
            " " +
            (this.props.data.id === this.props.showNodeID
              ? styles.treeNodeMainActive
              : "")
          }
          style={styleMap[this.props.data.level]}
        >
          {this.state.point ? (
            <div
              className={styles.pointCircle}
              style={{ top: this.state.top, left: this.state.left }}
            ></div>
          ) : (
            <></>
          )}
          {this.props.data.content}
        </div>
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
    console.log('d',treeData)
    this.setState({
      data:treeData
    })
  }
  changeNodeID(data) {
    data.id = data.id === this.state.showNodeID ? null : data.id;
    this.props.popupControl(data);
    this.setState({
      showNodeID: data.id,
      lastID: this.state.showNodeID,
    });
  }
  getNode(data) {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <TreeNode
            data={item}
            showNodeID={this.state.showNodeID}
            lastID={this.state.lastID}
            changeNodeID={this.changeNodeID.bind(this)}
          />
          <div className="flexRowNone">{this.getNode(item.childrens)}</div>
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
    "--shadowColor--": "#409EFF50",
    fontSize: "27px",
  },
  {
    color: "#ccc",
    "--shadowColor--": "#F56C6C50",
    fontSize: "22px",
  },
  {
    color: "#ccc",
    "--shadowColor--": "#67c23a50",
    fontSize: "17px",
  },
  {
    color: "#ccc",
    "--shadowColor--": "#E6A23C50",
    fontSize: "12px",
  },
  {
    color: "#ccc",
    "--shadowColor--": "#90939920",
    fontSize: "7px",
  },
];
export { Tree };
