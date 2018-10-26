import React, { Component } from "react";
import { Card } from "react-materialize";
import Avatar from "react-avatar-edit";
import "./Avatarbefore.css";

class Avatarpic extends Component {
  render() {
    return (
      <form className="profileavatar" onChange={this.props.onChange}>
        <i className="fas fa-user" />
      </form>
    );
  }
}

export default Avatarpic;

/*
onChange={this.props.onChange}
*/
