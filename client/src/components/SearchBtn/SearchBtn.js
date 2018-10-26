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
  render() {
    return (
      <form
        className="searchForm"
        onSubmit={this.props.onSubmit} /* {...props} */
      >
        <i className="fas fa-search" />
        <input
          onChange={this.props.onChange}
          name="searchTerm"
          className="searchBar_input searchBar_searchTerm"
          placeholder="Let's find what you're looking for"
          background-color="red"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="off"
          id="siteSearch"
          type="search"
          value={this.props.searchTerm}
        />
      </form>
    );
  }
}

export default SearchBtn;
