import React from "react";
import "./SearchBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

const SearchBtn = props => (
  <div class="searchBar">
    <div class="navigationItem__navigationItem">
      <div class="navigationItem__labelContainer">
        <form className="searchForm" {...props}>
          <input name="q" class="searchBar__searchInput--2aCeZ" placeholder="Let’s find what you’re looking for" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="off" id="siteSearch" type="search" value="" />
        </form>
      </div>
    </div>
  </div>

);

export default SearchBtn;


