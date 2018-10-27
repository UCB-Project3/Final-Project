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
      <Row>
        <div className="col-md-12 column">
          <Banner />
        </div>
        <Col s={12} m={6} offset="m2">
          <Card id="darkenprofile">
            <Row>
              <div class="market-band__header__main">
                <span>We suggest you These top 10 products</span>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Profile;
