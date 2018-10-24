import React, { Component } from "react";
//import { Navbar, NavItem, Icon } from 'react-materialize';
import Dropdown from "../dropdownmenu/Dropdown";
import Dropdown1 from "../dropdownmenu1/Dropdown1";
import Dropdown2 from "../dropdownmenu2/Dropdown2";
import SearchBtn from "../SearchBtn/SearchBtn";
import "./Nav.css";
import products from "../../data/products.json";

class Nav extends Component {
  render() {
    return (
      <div className="navigation-container">
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="srchdiv">
              <SearchBtn />
            </div>
            <div className="dropdowndiv">
              <Dropdown />

              <div className="dropdowndiv1">
                <Dropdown1 />
              </div>
              <div className="dropdowndiv2">
                <Dropdown2 />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
