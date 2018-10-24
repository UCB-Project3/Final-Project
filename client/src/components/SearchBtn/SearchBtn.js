import React, { Component } from "react";
import "./SearchBtn.css";
import products from '../../data/products.json';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

//const SearchBtn = props => (
class SearchBtn extends Component {

  render() {
    return (
      <div className="searchBar">
        <div className="navigationItem__navigationItem">
          <div className="navigationItem__labelContainer">
            <form className="searchForm" onSubmit={this.props.onSubmit} /* {...props} */>
              <input onChange={this.props.onChange} name="searchTerm" className="searchBar__searchInput--2aCeZ" placeholder="Let’s find what you’re looking for" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="off" id="siteSearch" type="search" value={this.props.searchTerm} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBtn;


