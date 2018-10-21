
import React, { Component } from "react";
import { Button, Card, Col, Input, Row, Icon } from "react-materialize";
import "./Homepage.css";

//import ReactDOM from "react-dom";
//import Jumbotron from "../../components/Jumbotron";
//import Banner from "../../components/Banner"
//import DeleteBtn from "../../components/DeleteBtn";
//import API from "../../utils/API";
//import { Col, Row, Container } from "../../components/Grid";
//import { List } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class Homepage extends Component {

    render() {
        return (
            <Row>
                <Col s={12} m={6} offset="m3">
                    <Card
                        className="darken-1"
                        textClassName="grey-text"
                        title="Email Form"
                    >
                    </Card>

                </Col>

            </Row>

        )
    }
}

export default Homepage;
