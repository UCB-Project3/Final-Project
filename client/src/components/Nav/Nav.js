import React from "react";
import Dropdown from "../dropdownmenu/Dropdown";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'

const Nav = () => (
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
);

export default Nav;
