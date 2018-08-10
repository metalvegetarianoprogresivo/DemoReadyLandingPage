import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Link, SideNav, SideNavItem} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import { getDataIds , 
    matchParamUrl, 
    getCategories , 
    getDemosByCategory, 
    getLocation,
    getDemoById,
    getUrl } from '../../../src/utils.js'

let locationKeywords = getUrl();

class HeaderDemo extends Component {
    render() {
        return [
            <div>
                <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} className='navbar_intersys' right >
                    <NavItem className="demos_menu"><Icon>menu</Icon></NavItem>
                    <NavItem href='/'><Icon>home</Icon></NavItem>
                    <NavItem href={`${locationKeywords.pathname}`}></NavItem>
                    <NavItem href={`${locationKeywords.pathname}/case`}>Study Case</NavItem>
                    <NavItem href={`${locationKeywords.pathname}/demo`} src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0">Demo</NavItem>
                    <NavItem href={`${locationKeywords.pathname}/credits`}>Credits</NavItem>
                    <NavItem href={`${locationKeywords.pathname}/tech`}>Tech Stack</NavItem>
                    {/* <NavItem href={'/demo-page/charmander'}>Charmander</NavItem> */}
                </Navbar>           
            </div>
        ]
    }
}

export default HeaderDemo;