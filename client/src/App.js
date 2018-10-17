import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
//import Title from "./components/Title";

//import logo from './logo.svg';
import './App.css';

//class App extends Component {
// render() {
//  return (
//   <div className="App">
//    <header className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//      <p>
//        Edit <code>src/App.js</code> and save to reload.
//      </p>
//      <a
//        className="App-link"
//        href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//    </header>
//  </div>
// );
// }
//}


const App = () => (
  <Router>
    <Wrapper>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Wrapper>
  </Router>
);

export default App;
