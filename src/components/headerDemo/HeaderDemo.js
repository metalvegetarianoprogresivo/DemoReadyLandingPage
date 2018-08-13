import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Link, SideNav, SideNavItem} from 'react-materialize'
import './HeaderDemo.css';
import logo from '../../assets/images/intersys-image.png';
import { getDataIds , 
    matchParamUrl, 
    getCategories , 
    getDemosByCategory, 
    getDemoById,
    getUrl,
    getLocation } from '../../../src/utils.js'

let locationKeywords = getLocation();
let currentPath = getUrl()

class HeaderDemo extends Component {
    constructor(props) {
        super(props)
    }


    cleanUrl = () => {
        let currentPath = getUrl()
        let arrPath = (currentPath.pathname.split('/'))
        let path = arrPath.filter(word => word.length > 0)
        
        if (path.length > 3) {
            path.pop()
        }

        return path.join('/')
    }    

    render() {
        return [
            <div>
                <Navbar brand={<img href="/" className="navbar_logo" src={logo} />} className='navbar_intersys' right >
                    <NavItem className="demos_menu"><Icon>menu</Icon></NavItem>
                    <NavItem href='/'><Icon>home</Icon></NavItem>
                    <NavItem href={`${currentPath.pathname}`}></NavItem>
                    <NavItem href={'/' + this.cleanUrl() + '/case'}>Case</NavItem>
                    <NavItem href={'/' + this.cleanUrl() + '/demo'} >Demo</NavItem>
                    <NavItem href={'/' + this.cleanUrl() + '/credits'}>Credits</NavItem>
                    <NavItem href={'/' + this.cleanUrl() + '/tech'}>Tech Stack</NavItem>
                </Navbar>           
            </div>
        ]
    }
}

export default HeaderDemo;