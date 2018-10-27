import React from "react";
import "./SearchResult.css";
import { Card } from "react-materialize";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

const SearchResult = props => (
    <Card title={props.productname ? props.productname[0].toUpperCase() + props.productname.slice(1) : ""} medium>
        <div className="card-content" style={{ display: "flex" }}>
            <img
                src={props.image}
                className="img-thumbnail"
                alt="wine"
            /* width="100"
            height="100"
            style={{ flex: 0 }} */
            />
            <div
                className="card-body"
                style={{ flex: "1 1 auto", marginLeft: 5 }}
            >
                <div className="brandName">{props.brandname ? props.brandname[0].toUpperCase() + props.brandname.slice(1) : ""}</div>
                <div className="productRating">{props.rating}</div>
                <div className="price">{(props.priceSign ? props.priceSign : "$") + (props.price ? (props.price.split('.')[1].length > 1 ? props.price : props.price + "0") : "5.00")}</div>

            </div>
        </div>
    </Card>
);

export default SearchResult;