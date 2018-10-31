import React from "react";
import "./Userdropmenu.css";
//import Menu, { SubMenu, MenuItem } from "rc-menu";
import { Menu, Dropdown, Icon, message } from "antd";

const onClick = function({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">My Make up</Menu.Item>
    <Menu.Item key="2">Setting</Menu.Item>
    <Menu.Item key="3">Sign Out</Menu.Item>
  </Menu>
);

class Userdropmenu extends React.Component {
  render() {
    return (
      <div className="dropdownuser">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default Userdropmenu;
