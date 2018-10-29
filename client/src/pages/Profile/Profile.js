import React, { Component } from "react";
import "./Profile.css";
import Banner from "../../components/Banner";
import {
  Button,
  Card,
  Col,
  Input,
  Preloader,
  Row,
  Icon
} from "react-materialize";
import ReactDOM from "react-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="row clearfix">
          <div className="col-md-12 column">
            <Banner />
          </div>
          <div s={10} m={8} offset="m1" className="profilemaincotent">
            <div>
              <div class="market-band__header__main">
                <span>We suggest you These top 10 products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
