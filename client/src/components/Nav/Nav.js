import React, { Component } from "react";
//import { Navbar, NavItem, Icon } from 'react-materialize';
import Dropdown from "../dropdownmenu/Dropdown";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'
import products from '../../data/products.json';

class Nav extends Component {

  /* componentDidMount = () => {
    this.props.toSearchState();
  } */

  render() {
    return (
      <div className="navigation-container">
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="srchdiv">
              <SearchBtn
                onChange={this.props.handleInputChange}
                onSubmit={this.props.handleFormSubmit}
                searchTerm={this.props.searchTerm} />
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
