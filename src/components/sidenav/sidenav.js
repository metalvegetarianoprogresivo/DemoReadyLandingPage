import React, { Component } from 'react';
import { SideNav, SideNavItem, Link, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize'
import './sidenav.css';

class Sidenav extends Component {

    render() {
        return[
            <div>
                <SideNav
                trigger={<Button><Icon>menu</Icon></Button>}
                options={{ closeOnClick: true }}
                >
                <SideNavItem href='#' header className='sidenav-header'>Categories</SideNavItem>
                <SideNavItem divider />
                <Collapsible accordion>
                    <CollapsibleItem header='Digital'>
                        <SideNavItem>Demo1</SideNavItem>
                        <SideNavItem>Demo2</SideNavItem>
                        <SideNavItem>Demo3</SideNavItem>
                    </CollapsibleItem>
                    <CollapsibleItem header='Big Data'>
                        <SideNavItem>Demo1</SideNavItem>
                        <SideNavItem>Demo2</SideNavItem>
                        <SideNavItem>Demo3</SideNavItem>
                    </CollapsibleItem>
                    <CollapsibleItem header='App Development'>
                        <SideNavItem>Demo1</SideNavItem>
                    </CollapsibleItem>
                    <CollapsibleItem header='Test Automation'>
                        <SideNavItem>Demo1</SideNavItem>
                        <SideNavItem>Demo2</SideNavItem>
                        <SideNavItem>Demo3</SideNavItem>
                    </CollapsibleItem>
                    <CollapsibleItem header='Skye Search'>
                        <SideNavItem>Demo1</SideNavItem>
                        <SideNavItem>Demo2</SideNavItem>
                    </CollapsibleItem>
                </Collapsible>
                </SideNav>
            </div>
        ]
    }
}

export default Sidenav;