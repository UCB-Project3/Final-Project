import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './Nav2.css'
import Dropdownmenu from "../Dropdownmenu/Dropdownmenu";
import SearchBtn from "../SearchBtn/SearchBtn";
//import NavStyles from '../styles/NavStyles';
//import { Switch, Link, Route } from 'react-router-dom';

const Nav2 = props => (

    <Navbar className="white darken-1 " >
        <NavItem className="itemdrop">
            <Dropdownmenu />
        </NavItem>
        <NavItem className="itemdrop">
            <SearchBtn />
        </NavItem>
        {/*<NavItem href='/'><Icon>refresh</Icon></NavItem> */}
    </Navbar>

);

export default Nav2;