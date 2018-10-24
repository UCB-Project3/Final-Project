import React from "react";
import "./SearchResult.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

const SearchResult = props => (
    <div key={props.key} className="searchCard row no-gutters">
        <div className="col-6 col-md-4">

        </div>
        <div className="col-12 col-sm-6 col-md-8">
            <img src={props.image} />
            <div className="brandName">{props.brandname ? props.brandname[0].toUpperCase() + props.brandname.slice(1) : ""}</div>
            <div className="productName">{props.productname ? props.productname[0].toUpperCase() + props.productname.slice(1) : ""}</div>
            <div className="productRating">{props.rating}</div>
            <div className="price">{(props.priceSign ? props.priceSign : "$") + (props.price.split('.')[1].length > 1 ? props.price : props.price + "0")}</div>
        </div>
    </div>
);

export default SearchResult;