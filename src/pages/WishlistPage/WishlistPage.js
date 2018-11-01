import React, { Component } from "react";
import { Button, Card } from "react-materialize";
import Banner from "../../components/Banner";

//import API from "../../utils/API";

import "./WishlistPage.css";

class WishlistPage extends Component {
  render() {
    return (
      <div>
        <div className="row clearfix">
          <div className="col-md-12 column">
            <div className="bannerbannerdiv">
              <Banner />
            </div>
          </div>
          <div className="position-data">
            <div className="First" />
            <div className="second">
              <Card>
                <div className="card-content" style={{ display: "flex" }}>
                  <img
                    src="https://images.vivino.com/thumbs/tG6qBPJLQY-5x6s8P1pIYQ_pb_x300.png"
                    className="img-thumbnail"
                    alt="wine"
                    style={{ flex: 0 }}
                  />
                  <span className="card-body" style={{ flex: "1 1 auto" }}>
                    <p>Title goes here</p>
                    <p>Body goes here</p>
                  </span>
                </div>
              </Card>
              {/*Button for Table here*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WishlistPage;
