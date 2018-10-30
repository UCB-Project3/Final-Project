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
import "./Profile.css";

// import Avatar from "../../Avatar"



class Profile extends Component {
    render() {
        return (
            <div>
            <Row>
            <div className="col-md-12 column">
              <Banner />
            </div>
            </Row>
            <Row>
            <div className="col-md-4 column">
                <span>here is the pix</span>
                </div>
            <div className="col-md-8 column">
                <Card>
                    <span>**We suggest you These top 10 products</span>
                </Card>
                </div>
                
            </Row>
            </div>
        );
      }
    }  
            
    

export default Profile;
