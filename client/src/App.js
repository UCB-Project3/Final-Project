import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
//import Title from "./components/Title";
import products from './data/products.json';
import { Redirect } from 'react-router-dom'
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    results: [],
    toSearch: false,
    currentUser: ""
  }

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

    this.setState({
      results: newResults,
      toSearch: true
    });
  };

  userCheck = () => {
    if (localStorage.getItem("okta-token-storage")) {
      let user = localStorage.getItem("okta-token-storage")

      user = JSON.parse(user).idToken.claims.email;

      if (user !== this.state.currentUser) {
        this.setState({
          currentUser: user
        })
      }
    }
  }

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

  toSearchState = () => {
    if (this.state.toSearch) {
      this.setState({
        toSearch: false
      });
    }
  };

  searchPage = () => {
    if (this.state.toSearch) {
      return <Redirect to="/search" />;
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Nav
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            searchTerm={this.state.searchTerm}
            toSearchState={this.toSearchState}
          />
          {this.searchPage()}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/search" component={Search} searchResults={this.state.searchResults} /> */}
            <Route
              exact
              path="/search"
              component={() => <Search searchResults={this.state.results} />}
            />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
