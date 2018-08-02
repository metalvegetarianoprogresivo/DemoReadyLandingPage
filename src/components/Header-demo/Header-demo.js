import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Link } from 'react-materialize'
import './Header-demo.css';
import logo from '../../assets/images/intersys-image.png';

class Headerdemo extends Component {
    render() {
        return [
            <div>
                <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} className='navbar_intersys' right>
                    <NavItem href='/'>Back Home</NavItem>
                    <NavItem href='/'>Case Study</NavItem>
                    <NavItem href='/'>Live Demo</NavItem>
                    <NavItem href='/'>Tech Stack</NavItem>
                    <NavItem href='/'>Credits</NavItem>
                </Navbar>
            </div>
        ]
    }
}

export default Headerdemo;