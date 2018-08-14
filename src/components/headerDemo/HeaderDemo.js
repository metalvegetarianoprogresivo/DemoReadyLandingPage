import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import { getUrl } from '../../../src/utils.js'

let currentPath = getUrl()

let cleanUrl = function () {
    // let currentPath = getUrl()
    let arrPath = (currentPath.pathname.split('/'))
    let path = arrPath.filter(word => word.length > 0)

    if (path.length > 3) {
        path.pop()
    }

    return path.join('/')
}

const headerDemo = (props) => (
    <div>
        <Navbar brand={<img href="/" className="navbar_logo" src={logo} alt='logo' />} className='navbar_intersys' right >
            <NavItem className="demos_menu"><Icon>menu</Icon></NavItem>
            <NavItem href='/'><Icon>home</Icon></NavItem>
            <NavItem href={`${currentPath.pathname}`}></NavItem>
            <NavItem href={'/' + cleanUrl() + '/case'}>Case</NavItem>
            <NavItem href={'/' + cleanUrl() + '/demo'} >Demo</NavItem>
            <NavItem href={'/' + cleanUrl() + '/credits'}>Credits</NavItem>
            <NavItem href={'/' + cleanUrl() + '/tech'}>Tech Stack</NavItem>
        </Navbar>
    </div>
);
export default headerDemo;