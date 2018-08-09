import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import VideoDemo from '../../components/VideoDemo/VideoDemo'
import StudyCase from '../../components/StudyCase/StudyCase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from '../sidenav/sidenav.js'
import './DemoPage.css';

class DemoPage extends Component {
    render() {
        // TO-DO src should be rendered from props
        return [
            <div>
                <HeaderDemo></HeaderDemo>
                {/* <SideNav></SideNav> */}
                <div>
                    <Switch>
                        <Route exact path="/" component={VideoDemo} />
                        <Route exact path="/case" component={StudyCase} />
                        <Route exact path = "/demo" component = {VideoDemo} />
                    </Switch>
                </div>
            </div>
        ]
    }
}

export default DemoPage;