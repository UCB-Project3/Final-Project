import React, { Component } from "react";
import "./Footer.css";

class MainFooter extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-12 column">
        <footer className="page-footer font-small lightgray darken-3 black-text">
          <div className="container">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a className="fb-ic">
                  <i className="fa fa-facebook fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="tw-ic">
                  <i className="fa fa-twitter fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="gplus-ic">
                  <i className="fa fa-google-plus fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="li-ic">
                  <i class="fa fa-linkedin fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="ins-ic">
                  <i class="fa fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="pin-ic">
                  <i class="fa fa-pinterest fa-lg black-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="git-ic">
                  <i class="fa fa-github fa-lg black-text mr-md-5 mr-3 fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default MainFooter;
