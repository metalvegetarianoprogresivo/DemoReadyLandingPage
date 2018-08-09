import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import VideoDemo from '../../components/VideoDemo/VideoDemo'
import StudyCase from '../../components/StudyCase/StudyCase'
import Credits from '../../components/credits/Credits'
import TechStack from '../../components/techStack/TechStack'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './DemoPage.css';

class DemoPage extends Component {
    render() {
        // TO-DO src should be rendered from props
        return [
            <div class="container">
                <HeaderDemo></HeaderDemo>
                <Switch>
                    <Route path="/demo-page/:categoryId/:demoId/case" component={StudyCase} />
                    <Route path ="/demo-page/:categoryId/:demoId/demo" component = {VideoDemo} />
                    <Route path ="/demo-page/:categoryId/:demoId/credits" component = {Credits} />
                    <Route path ="/demo-page/:categoryId/:demoId/stack" component = {TechStack} />
                </Switch>
            </div>
        ]
    }
}

export default DemoPage;