import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
//import Login from "./pages/Login";
//import Profile from "./pages/Profile";
//import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
//import Title from "./components/Title";



//import logo from './logo.svg';
import './App.css';


// will USE these three Routes when LOGIN,SEARCH and Profile pages get ready
//<Route exact path="/login" component={Login} />
//<Route exact path="/search" component={Search} />
//<Route exact path="/profile" component={Profile} />

// <Route component={NoMatch} />


const App = () => (
  <Router>
    <Wrapper>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />


        </Switch>
      </div>
    </Wrapper>
  </Router>
);

export default App;
