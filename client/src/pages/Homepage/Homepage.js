
import React, { Component } from "react";
import { Card, Col, Row, Icon } from "react-materialize";
//import Page from '../components/Page';

import Banner from "../../components/Banner"
import Nav2 from "../../components/Nav2"


const Homepage = props => (




    <Row>
        <Col s={12} m={16}>



            <Nav2 />

            <Row>
                <Banner />
            </Row>

        </Col>
    </Row>
)

export default Homepage;



