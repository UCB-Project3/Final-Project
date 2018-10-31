import React, { Component } from "react";
import "./Profile.css";
import Banner from "../../components/Banner";


class Profile extends Component {
  componentDidMount(){
    console.log(this.state);
  }
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
