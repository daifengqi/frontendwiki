import React from "react";
import "./AddLinkModal.module.css";
import { Tooltip, message, Modal, Input, Select } from "antd";

const { Option } = Select;

const selectUrlBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
function AddLinkModal(props) {
  return (
    <div>
      <Input addonBefore={selectUrlBefore} />
      <br />
      <Input placeholder="请输入对该链接的描述" />
      <br />
      <Input placeholder="请输入第一的标签" />
    </div>
  );
}

export default AddLinkModal;
