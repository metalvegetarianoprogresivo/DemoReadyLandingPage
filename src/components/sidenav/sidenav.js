import React, { Component } from 'react';
import { SideNavItem } from 'react-materialize'
import './sidenav.css';
import { createPortal } from 'react-dom'

class Sidenav extends Component {



    render() {
        let content = (
            <div className={`sidenavParent ${this.props.isOpen ? 'open' : ''}`}>
                <div className="overlay" onClick={e => this.props.toggle() }></div>
                <ul className={`sidenav`}>
                    <SideNavItem href='#' header className='sidenav-header'>Categories</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem href="">Demo 1</SideNavItem>
                    <SideNavItem href="">Demo 2</SideNavItem>
                    <SideNavItem href="">Demo 3</SideNavItem>
                    <SideNavItem >Demo 4</SideNavItem>
                </ul>
            </div>

        )


        return createPortal(content, document.getElementsByTagName('body')[0])
    }
}

export default Sidenav;