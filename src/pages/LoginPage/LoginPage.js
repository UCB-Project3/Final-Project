import React, { Component } from "react";

import Login from "../../components/Login/Login";

class LoginPage extends Component {

  render() {
    return <Login _login={this.props._login} />;
  }
}

export default LoginPage;
