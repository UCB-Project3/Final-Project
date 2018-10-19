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
    const term = this.state.searchTerm.toLowerCase();

    let newResults = [];

    products.forEach(product => {
      if (product.name.toLowerCase().indexOf(term) > -1 || product.category.toLowerCase().indexOf(term) > -1 || product.product_type.toLowerCase().indexOf(term) > -1) {
        newResults.push(product);
      }
    })

    this.setState({
      results: newResults
    });

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
