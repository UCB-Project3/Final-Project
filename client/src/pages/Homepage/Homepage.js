
import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import Banner from "../../components/Banner"
import Originalnav from "../../components/Nav"
import "./Homepage.css";



//import ReactDOM from "react-dom";
//import Jumbotron from "../../components/Jumbotron";

//import DeleteBtn from "../../components/DeleteBtn";
//import API from "../../utils/API";
//import { Col, Row, Container } from "../../components/Grid";
//import { List } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class Homepage extends Component {

    render() {
        return (
            <Row>
                <Col s={12} m={16} >
                    <div className="navdiv">
                        <Originalnav />
                    </div>

                    <div>

                        <Banner />
                    </div>

                </Col>

            </Row >

        )
    }
}

export default Homepage;
