import React, { Component } from "react";
import Dropdown from "../dropdownmenu/Dropdown";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'
import products from '../../data/products.json';

class Nav extends Component {
  state = {
    searchTerm: "",
    results: []
  }

  searchJSON = () => {
    const term = this.state.searchTerm;

    products.forEach(product => {
      if (product.name.indexOf(term) > -1 || product.category.indexOf(term) > -1 || product.product_type.indexOf(term) > -1) {
        results.push(product);
      }
    })


  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchJSON();

  }

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
