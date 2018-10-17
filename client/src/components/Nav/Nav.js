import React from "react";
import Dropdown from "../dropdownmenu/Dropdown";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'

const Nav = () => (
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
);

export default Nav;
