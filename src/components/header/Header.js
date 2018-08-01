import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Link } from 'react-materialize'
import './Header.css';
import logo from '../../assets/images/intersys-logo.png';

class Header extends Component {
    render() {
        return [
            <div>
                <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} className='navbar_intersys'>
                    <NavItem href='/'><Icon>home</Icon></NavItem>
                    <NavItem>Demos</NavItem>
                    <NavItem>Partnership</NavItem>
                    <NavItem>About Us</NavItem>
                </Navbar>
            </div>
        ]
    }
}

export default Header;