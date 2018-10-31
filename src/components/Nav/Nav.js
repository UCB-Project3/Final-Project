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
    const CosmeticsMenu = [
      {
        name: "Skin",
        route: "/skin"
      },
      {
        name: "Hair",
        route: "/hair"
      },
      {
        name: "Perfume",
        route: "/perfume",
        subMenu: [
          {
            name: "Womens",
            route: "/womens"
          },
          {
            name: "Mens",
            route: "/mens"
          },
          {
            name: "Childrens",
            route: "/childrens"
          }
        ]
      }
    ];
    const OfferMenu = [
      {
        name: "Offers1",
        route: "/offers1"
      },
      {
        name: "Offers2",
        route: "/offers2"
      },
      {
        name: "Offers3",
        route: "/offers3"
      }
    ];
    const ProfileMenu = [
      {
        name: "My Account",
        route: "/account"
      },
      {
        name: "Settings",
        route: "/settings"
      },
      {
        name: "Sign out",
        route: "/logout"
      }
    ];

    return (
      <div>
        <div className="navbarpatition">
          <div className="logodiv">MarkUp</div>

          <div className="dropdownmakeupdiv">{/*  <Makeup />*/}</div>
          <div className="dropdownnewdiv">
            {/*<Dropdownnew />*/}
            <Cascadingmenu menuName="Cosmetics" menuElements={CosmeticsMenu} />
          </div>
          <div className="dropdownofferdiv">
            {/* <Dropdownoffer />*/}
            <Cascadingmenu menuName="Offer" menuElements={OfferMenu} />
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
          <div className="signupbutton ">
            <a href="/login" className="signinfeature">
              Sign In
            </a>
          </div>
          <div className="dropdownicon">
            <Cascadingmenu menuName="" menuElements={ProfileMenu} />
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
