import React from "react";
import "./Cascadingmenu.css";
//import Menu, { SubMenu, MenuItem } from "rc-menu";
import { Menu, Dropdown, Icon, message } from "antd";

class Cascadingmenu extends React.Component {
  render() {

    const { SubMenu, Item } = Menu;
    const subMenuElements = sub => sub.map(subelem => <Item key={subelem.name}>{subelem.name}</Item>);

    const menuElements = () => {
      return this.props.menuElements.map(element => 
          {return (element.subMenu) 
            ? <SubMenu title={element.name} key={element.name}>{subMenuElements(element.subMenu)}</SubMenu>
            : <Item key={element.name}>{element.name}</Item>}
      )
    }

    const menu = (
      <Menu>
        {menuElements()}
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
