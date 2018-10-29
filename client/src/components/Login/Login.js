import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from "./google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";

import {
  Button,
  Card,
  Col,
  Input,
  Preloader,
  Row,
  Icon
} from "react-materialize";

const logindivStyle = {
  width: "270px",
  margin: "100px 0 8px 550px",
  // border: "5px solid pink",
  content: "center"
};

const imgdivStyle = {
  height: " 40px",
  width: "140px",
  background: "white",
  color: " #737373",
  margin: "20px 0 120px 50px",
  content: "center"
};

const loginbuttondivStyle = {
  margin: "20px 0 20px 75px",
  content: "center"
};
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    // this.googleSignin = this.googleSignin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirectTo: "/profile"
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="loginbody" style={logindivStyle}>
          <div className="loginbody2">
            <div className="col-md-12 column">
              <div id="LoginForm">
                <h4>Welcome back</h4>
                <div className="budybody">
                  <div className="usernamediv">
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      name="username"
                      label="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="passworddiv">
                    <label htmlFor="password">Password: </label>
                    <input
                      type="password"
                      name="password"
                      label="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div style={loginbuttondivStyle}>
                    <button onClick={this.handleSubmit}>Login</button>
                  </div>
                </div>
              </div>
              <a href="/auth/google">
                {/* <GoogleButton /> */}
                <img
                  src={googleButton}
                  style={imgdivStyle}
                  alt="sign into Google Button"
                  className="googlebutton"
                />
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
