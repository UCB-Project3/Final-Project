import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Card,
  Col,
  Input,
  Preloader,
  Row,
  Icon
} from "react-materialize";
import Login from "../../components/Login/Login";

class LoginPage extends Component {


  render() {
    return <Login _login={this.handleSubmit}  />;
  }
}

export default LoginPage;
