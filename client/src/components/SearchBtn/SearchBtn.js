import React, { Component } from "react";
import "./SearchBtn.css";
import products from "../../data/products.json";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

//const SearchBtn = props => (
class SearchBtn extends Component {
  state = {
    searchTerm: "",
    results: []
  };

  searchJSON = () => {
    const term = this.state.searchTerm.toLowerCase();

    let newResults = [];

    products.forEach(product => {
      if (
        (product.name && product.name.toLowerCase().indexOf(term) > -1) ||
        (product.category &&
          product.category.toLowerCase().indexOf(term) > -1) ||
        (product.product_type &&
          product.product_type.toLowerCase().indexOf(term) > -1)
      ) {
        newResults.push(product);
      }
    });

    console.log(newResults);

    this.setState(
      {
        results: newResults
      },
      () => {
        console.log(this.state.results);
      }
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchJSON();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="searchBar">
        <div className="navigationItem__navigationItem">
          <div className="navigationItem__labelContainer">
            <form
              className="searchForm"
              onSubmit={this.handleFormSubmit} /* {...props} */
            >
              <i class="fas fa-search" />
              <input
                onChange={this.handleInputChange}
                name="searchTerm"
                className="searchBar_input searchBar_searchTerm"
                placeholder="Let’s find what you’re looking for"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="off"
                id="siteSearch"
                type="search"
                value={this.state.searchTerm}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBtn;
