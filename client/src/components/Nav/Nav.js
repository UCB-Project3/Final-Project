import React from "react";
import Dropdown from "../dropdownmenu/Dropdown";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      React Reading List
      <Dropdown />
    </a>
  </nav>
);

export default Nav;
