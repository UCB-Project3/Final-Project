import React from "react";
import "./Cascadingmenu.css";
//import Menu, { SubMenu, MenuItem } from "rc-menu";
import { Menu, Dropdown, Icon, message } from "antd";

class Cascadingmenu extends React.Component {
  render() {
    const SubMenu = Menu.SubMenu;

    const menu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          {this.props.menuName} <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default Cascadingmenu;
