import React, { Component } from "react";
import { Card } from "react-materialize";
import Avatar from "react-avatar-edit";
import "./Avatar.css";

class Avatarpicupload extends Component {
  constructor(props) {
    super(props);
    const src = "/assets/img/Welcomepic.jpg";
    this.state = {
      preview: null,
      src
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  render() {
    return (
      <form className="profileavatar">
        <i className="fas fa-user" />
        <Avatar
          width={90}
          height={95}
          onCrop={this.onCrop}
          onClose={this.onClose}
          float="right"
          src={this.state.src}
        />
      </form>
    );
  }
}

export default Avatarpicupload;

/* <form className="profileavatar"
        >
          <i className="fas fa-user" />
          <Avatar
            width={90}
            height={95}
            onCrop={this.onCrop}
            onClose={this.onClose}
            float="right"
            src={this.state.src}
          />
          <img src={this.state.preview} alt="Preview" />
        </form>
  */
