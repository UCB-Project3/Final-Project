
import React, { Component } from "react";
import { Navbar, NavItem, Icon } from 'react-materialize';
//import { Switch, Link, Route } from 'react-router-dom';
//import SiteNav, { ContentGroup } from 'react-site-nav';

import Dropdownmenu from "../Dropdownmenu/Dropdownmenu";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'
import products from '../../data/products.json';
//</Dropdown>;
class Originalnav extends Component {


  render() {
    return (
      // <div className="navbar1" >
      //   <Dropdownmenu />
      // <div className="navigation-container">

      /*
       <div className="srchdiv">
            <SearchBtn />
          </div>
          */
      <Navbar className=" Mainnav " >
        <NavItem>

          <div className="dropmenu">
            <Dropdownmenu />
          </div>


        </NavItem>

      </Navbar>


    );
  }
}

export default Originalnav;

