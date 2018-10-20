import React, { Component } from "react";
import Dropdown from "../dropdownmenu/Dropdown";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'
import products from '../../data/products.json';

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
            </div>
          </div>
        </nav>
      </div >
    )
  }
}

export default Nav;
