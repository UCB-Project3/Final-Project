import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
//import Title from "./components/Title";
import products from "./data/products.json";
import { Redirect } from "react-router-dom";

//import logo from './logo.svg';
import "./App.css";

// will USE these three Routes when LOGIN,SEARCH and Profile pages get ready
//<Route exact path="/login" component={Login} />
//<Route exact path="/search" component={Search} />
//<Route exact path="/profile" component={Profile} />

// <Route component={NoMatch} />

class App extends Component {
  state = {
    searchTerm: "",
    results: [],
    toSearch: false
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

    this.setState({
      results: newResults,
      toSearch: true
    });
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
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
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
