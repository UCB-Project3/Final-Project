import React, { Component } from "react";
//import { Icon } from "react-materialize";
import Avatarpic from "../Avatar/Avatarbefore";
import Makeup from "../dropdownmakeup/Makeup";
import Dropdownoffer from "../dropdownoffer/Dropdownoffer";
import Dropdownnew from "../dropdownnew/Dropdownnew";
import SearchBtn from "../SearchBtn/SearchBtn";
import "./Nav.css";
import products from "../../data/products.json";
import Userdropmenu from "../Userdropmenu/Userdropmenu";
import Cascadingmenu from "../Cascadingmenu/Cascadingmenu";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navbarpatition">
          <div className="logodiv">logo</div>

          <div className="dropdownmakeupdiv">{/*  <Makeup />*/}</div>
          <div className="dropdownnewdiv">
            {/*<Dropdownnew />*/}
            <Cascadingmenu menuName="Cosmetics" />
          </div>
          <div className="dropdownofferdiv">
            {/* <Dropdownoffer />*/}
            <Cascadingmenu menuName="Offer" />
          </div>
          <div className="srchdiv">
            <SearchBtn
              onChange={this.props.handleInputChange}
              onSubmit={this.props.handleFormSubmit}
              searchTerm={this.props.searchTerm}
            />
          </div>

          <div className="shopicon">
            <i className="fas fa-shopping-cart" />
          </div>
          <div className="dropdownicon">
            <Cascadingmenu menuName="" />
            {/* <Userdropmenu />*/}
          </div>
          <div className="avatarpic" size="2x">
            <Avatarpic />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

/*<div className="dropdownicon">
            <i className="fas fa-chevron-down" />
          </div> */
