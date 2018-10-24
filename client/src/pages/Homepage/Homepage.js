import React, { Component } from "react";
import {
  Button,
  Card,
  Input,
  Preloader,
  Icon,
  Footer,
  Table,
  thead,
  th,
  tr,
  tbody
} from "react-materialize";
import ReactDOM from "react-dom";
import Jumbotron from "../../components/Jumbotron";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
//import DeleteBtn from "../../components/DeleteBtn";
//import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
//import { List } from "../../components/List";
import "./Homepage.css";

class Homepage extends Component {
  state = {
    rows: [{}]
  };

  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };

  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  render() {
    return (
      <div>
        <div className="row clearfix">
          <div className="col-md-12 column">
            <Jumbotron>
              <Nav />
              <Banner />
            </Jumbotron>
          </div>
          <div className="position-data">
            <div className="First">Column 1</div>
            <div className="second">
              <Card title="Title goes here" medium>
                <div className="card-content" style={{ display: "flex" }}>
                  <img
                    src="https://images.vivino.com/thumbs/tG6qBPJLQY-5x6s8P1pIYQ_pb_x300.png"
                    className="img-thumbnail"
                    alt="wine"
                    width="25"
                    height="100"
                    style={{ flex: 0 }}
                  />
                  <div
                    className="card-body"
                    style={{ flex: "1 1 auto", marginLeft: 5 }}
                  >
                    Body goes here
                  </div>
                </div>
              </Card>
              {/*Button for Table here*/}
            </div>
          </div>

          <Col size="md-6 sm-12">
            <Footer
              copyrights="&copy 2015 Copyright Text"
              moreLinks={
                <a className="grey-text text-lighten-4 right" href="#!">
                  More Links
                </a>
              }
              className="example"
            >
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </Footer>
          </Col>
        </div>
      </div>
    );
  }
}

export default Homepage;

/*


<table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center"> # </th>
                      <th className="text-center"> Name </th>
                      <th className="text-center"> Mobile </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td>{idx}</td>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="mobile"
                            value={this.state.rows[idx].mobile}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={this.handleRemoveSpecificRow(idx)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

               
                {/*Table Finish here*/
/*Button for Table Start here*/
/*  
                <button onClick={this.handleAddRow} className="btn btn-primary">
                  Add Row
                </button>
                <button
                  onClick={this.handleRemoveRow}
                  className="btn btn-danger float-right"
                >
                  Delete Last Row
                </button>

*/
