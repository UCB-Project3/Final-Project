import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchResult from "../../components/SearchResult";
import Wrapper from "../../components/Wrapper";

class Search extends Component {
    state = {
        results: []
    };

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

                {this.state.results.map(result => (
                    <SearchResult
                        image={result.image}
                        brandname={result.brandname}
                        productname={result.productname}
                        rating={result.rating}
                        price={result.price}
                    />
                ))
                }
            </Wrapper>
        );
    }
}

export default Search;