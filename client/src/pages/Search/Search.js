import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchResult from "../../components/SearchResult";
import Wrapper from "../../components/Wrapper";

class Search extends Component {

    render() {
        return (
            <Wrapper>
                <div className="row no-gutters">
                    <div className="col-6 col-md-4">
                        filters placeholder
                </div>
                    <div className="col-12 col-sm-6 col-md-8">
                    </div>
                </div>

                {this.props.searchResults.length > 0 ? this.props.searchResults.map(result => (
                    <SearchResult
                        image={result.image_link}
                        brandname={result.brand}
                        productname={result.name}
                        rating={result.rating}
                        price={result.price}
                        key={result.image}
                        priceSign={result.priceSign}
                    />
                )) : <div>No results found!</div>
                }
            </Wrapper>
        );
    }
}

export default Search;