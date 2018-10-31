import React, { Component } from "react";
import { Priceslider } from "../../components/slider/Priceslider";
import { Button, Card } from "react-materialize";

import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import SearchResult from "../../components/SearchResult";
//import DeleteBtn from "../../components/DeleteBtn";
//import API from "../../utils/API";

//import { List } from "../../components/List";
import "./Homepage.css";
// import { Slider, InputNumber } from "antd";

class Homepage extends Component {
  state = {
    rows: [{}],
    price: 0,
    buttons: [
      {
        name: "clinique",
        checked: false
      },
      {
        name: "dior",
        checked: false
      },
      {
        name: "smashbox",
        checked: false
      },
      {
        name: "maybelline",
        checked: false
      },

      {
        name: "l'oreal",
        checked: false
      },
      {
        name: "nyx",
        checked: false
      },
      {
        name: "revlon",
        checked: false
      },
      {
        name: "e.l.f.",
        checked: false
      },
      {
        name: "covergirl",
        checked: false
      },
      {
        name: "physicians formula",
        checked: false
      }
    ]
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

  handleCheckChange = index => {
    console.log("btn clicked", index);
    const buttons = this.state.buttons;
    buttons[index].checked = !this.state.buttons[index].checked;
    this.setState({
      buttons
    });
  };
  handlePriceChange = price => {
    this.setState({
      price
    });
  };

  displayButtons = () => {
    const { buttons } = this.state;
    return buttons.map((btn, index) => (
      <Button
        checked={btn.checked}
        id={index}
        key={index}
        style={{ margin: 5 }}
        className={
          btn.checked
            ? "green darken-2 white-text"
            : "grey lighten-4 black-text"
        }
        onClick={() => this.handleCheckChange(index)}
      >
        {btn.name}
      </Button>
    ));
  };

  renderSearchResults = () => {
    const activatedBtns = this.state.buttons.filter(btn => btn.checked);

    if (this.props.searchResults.length > 0 && activatedBtns.length > 0) {
      let trueResults = [];

      activatedBtns.forEach(brandBtn => {
        if (brandBtn.checked) {
          let tempResults = this.props.searchResults.filter(result => result.brand ? result.brand.toLowerCase().indexOf(brandBtn.name) > -1 : false);
          trueResults = trueResults.concat(tempResults);
        }
      })

      return trueResults.map(result => (
        <SearchResult
          image={result.image_link}
          brandname={result.brand}
          productname={result.name}
          rating={result.rating}
          price={result.price}
          key={result.image}
          priceSign={result.priceSign}
        />
      ))
    } else if (this.props.searchResults.length > 0) {
      return this.props.searchResults.map(result => (
        <SearchResult
          image={result.image_link}
          brandname={result.brand}
          productname={result.name}
          rating={result.rating}
          price={result.price}
          key={result.image}
          priceSign={result.priceSign}
        />
      ))
    } else {
      return (<div>No results found!</div>);
    }
  }

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
            <div className="First">
              Filter By :
              <div className="Filter-ByBrand">
                Brand :<div style={{}}>{this.displayButtons()}</div>
              </div>
              <div className="Filter-Byprice">
                <p> Price Range </p>
                <div>
                  <Priceslider handlePriceChange={this.handlePriceChange} />
                </div>
              </div>
            </div>
            <div className="second">
              {/*this.props.searchResults.length > 0 ? this.props.searchResults.map(result => (
                <SearchResult
                  image={result.image_link}
                  brandname={result.brand}
                  productname={result.name}
                  rating={result.rating}
                  price={result.price}
                  key={result.image}
                  priceSign={result.priceSign}
                />
              )) : <div>No results found!</div>*/
              }
              {this.renderSearchResults()}
              {/* <Card>
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
              </Card> */}
              {/*Button for Table here*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
