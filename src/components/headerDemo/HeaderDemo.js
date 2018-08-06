import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Link, SideNav, SideNavItem} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';

class HeaderDemo extends Component {
    render() {
        return [
            <div>
                <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} className='navbar_intersys' right >
                    <NavItem className="demos_menu"><Icon>menu</Icon></NavItem>
                    <NavItem href='/'><Icon>home</Icon></NavItem>
                    <NavItem href='/case'>Study Case</NavItem>
                    <NavItem href='/demo' src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0">Demo</NavItem>
                    <NavItem href='/credits'>Credits</NavItem>
                    <NavItem href='/stack'>Tech Stack</NavItem>
                </Navbar>           
            </div>
        ]
    }
}

export default HeaderDemo;