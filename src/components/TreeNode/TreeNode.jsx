import React from "react";
import styles from "./index.module.css";
import { useState } from "react";

function NodeContent(props){
  return(
    // CR：这种 className 可以用数组维护
    <div className={"flexColumn "+styles.NodeContent}>
      <div className={"flexRow "+styles.LabelContain}>
          {
            props.labelCollections?props.labelCollections.map(item=>{
              return (
                <div className={"flexCenter "+styles.labelItem} key={item}>
                  {item}
                </div>
              )
            }):<></>
          }
      </div>
    </div>
  )
}

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
          style={{
            "--bgColor--": this.props.data.bgColor,
            "--color--": this.props.data.color,
          }}
        >
          {this.props.data.content}
        </div>
        <div
          className={
            styles.showNodeArea +
            " " +
            (this.props.data.id === this.props.showNodeID
              ? styles.showNodeAreaShow
              : "")
          }
        >
          <NodeContent labelCollections={['CSS','高阶']}/>
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
              content: "test1-0",
              id: "10",
              childrens: [
                {
                  bgColor: "red",
                  color: "white",
                  content: "test1-0-0",
                  id: "100",
                  childrens: [],
                },
                {
                  bgColor: "red",
                  color: "white",
                  content: "test1-0-1",
                  id: "101",
                  childrens: [],
                },
              ],
            },
            {
              bgColor: "red",
              color: "white",
              content: "test1-1",
              id: "12",
              childrens: [],
            },
          ],
        },
        {
          bgColor: "red",
          color: "white",
          content: "test2",
          id: "2",
          childrens: [
            {
              bgColor: "red",
              color: "white",
              content: "test2-0",
              id: "20",
              childrens: [],
            },
          ],
        },
      ],
      showNodeID: null,
    };
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
    return <>{this.getNode(this.state.data)}</>;
  }
}

export { Tree };
