import React from "react";
import "./SearchResult.css";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
//  <span className="search-btn" {...props}>
// ✗
//</span>

const SearchResult = props => (
   <div>
            <img
                src={props.image}
                className="img-thumbnail"
                alt="wine"
                width="25"
                height="100"
                style={{ flex: 0 }}
                />
               
          
             <div className="brandName">{props.productname}</div>
             <div className="productRating"> ⭐ {props.rating? props.rating : 2.5}</div>
             <div className="price">${props.price}</div>

         </div>
            
 
    //     </div>
  
);

export default SearchResult;