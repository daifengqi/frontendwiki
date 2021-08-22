import React, { useState } from "react";
import "./AddLinkModal.module.css";
import { Input, Select } from "antd";

const { Option } = Select;

function AddLinkModal(props) {
  let [url, setUrl] = useState("");
  let [desc, setDesc] = useState("");
  let [tab, setTab] = useState("");
  let [cntUrlPrev, setUrlPrev] = useState("https://");

  const changeUrl = (url) => {
    setUrl(url);
    props.changeAddLinkData({ url: cntUrlPrev + url });
  };

  const changeTab = (tab) => {
    setTab(tab);
    props.changeAddLinkData({ tab: tab });
  };

  const changeDesc = (desc) => {
    setDesc(desc);
    props.changeAddLinkData({ desc: desc });
  };

  const changeUrlPrev = (value) => {
    setUrlPrev(value);
  };

  const selectUrlBefore = (
    <Select
      defaultValue="http://"
      className="select-before"
      value={cntUrlPrev}
      onChange={(value) => changeUrlPrev(value)}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <div>
      <Input
        addonBefore={selectUrlBefore}
        value={url}
        onChange={(e) => changeUrl(e.target.value)}
      />
      <br />
      <Input
        placeholder="请输入对该链接的描述"
        onChange={(e) => changeDesc(e.target.value)}
        value={desc}
      />
      <br />
      <Input
        placeholder="请输入对应的标签"
        value={tab}
        onChange={(e) => changeTab(e.target.value)}
      />
    </div>
  );
}

export default AddLinkModal;
