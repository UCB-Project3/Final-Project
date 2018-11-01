import React, { Component } from "react";
import "./SignUpForm.css";
import axios from "axios";
import { Redirect } from "react-router-dom";



const signupdivStyle = {
  width: "270px",
  margin: "100px 0 40px 550px",
  // border: "5px solid pink",
  content: "center"
};

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null
    };
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
    // TODO - validate!
    axios
      .post("/auth/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("youre good");
          this.setState({
            redirectTo: "/login"
          });
        } else {
          console.log("duplicate");
        }
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="col-md-12 column">
        <div className="SignupForm" style={signupdivStyle}>
          <h1 className="Signuph1">Signup form</h1>
          <h5 className="Signuph5">
            Please type your name and choose a password
          </h5>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              className="form-control input-lg"
              heap-ignore="true"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              className="form-control input-lg"
              heap-ignore="true"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control input-lg"
              heap-ignore="true"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group4">
            <button onClick={this.handleSubmit}>Sign up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
