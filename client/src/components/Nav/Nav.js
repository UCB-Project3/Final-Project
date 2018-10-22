import React, { Component } from "react";
import { Navbar, NavItem, Icon } from 'react-materialize';

import { Switch, Link, Route } from 'react-router-dom';
import SiteNav, { ContentGroup } from 'react-site-nav';

import Dropdownmenu from "../Dropdownmenu/Dropdownmenu";
import SearchBtn from "../SearchBtn/SearchBtn";
import './Nav.css'
import products from '../../data/products.json';
//</Dropdown>;
class Originalnav extends Component {

  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


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


      <SiteNav>
        <ContentGroup title="Cosmetics" height="200" class="firstmenu">
          {/* 3. You can add anything in a ContentGroup */}
          <ul>
            <li><a className="active" href="#Eye">Eye</a></li>
            <li><a href="#Face">Face</a></li>
            <li><a href="#Cheek">Cheek</a></li>
            <li><a href="#Lip">Lip</a></li>
            <li><a href="#Accessories">Accessories</a></li>

          </ul>
        </ContentGroup>
        <ContentGroup title="Contact" height="200">
          Free text followed by some links.<br />
          <a href="mailto:yusinto@gmail.com">Email</a><br />
          <a href="https://github.com/yusinto">Github</a>
        </ContentGroup>

      </SiteNav>





    );
  }
}

export default Originalnav;



