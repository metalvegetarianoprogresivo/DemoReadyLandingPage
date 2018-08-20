import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import { getLocation,
         getDemoById } from '../../../src/utils.js'

import './DemoPage.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StudyCase from '../../components/StudyCase/StudyCase';
import TechStack from '../../components/techStack/TechStack';


class DemoPage extends Component {

    getLocationKeywords = () => {
        let locationKeywords = getLocation();

        return locationKeywords
    }
    
    constructor(props) {
        super(props)

        let dataLocation = this.getLocationKeywords()
        let id = dataLocation[2]
        let category = dataLocation[1]
        let demoData = getDemoById(category, id)

        this.state = {
            credits : demoData.content.credits,
            techStack : demoData.content.techStack,
            demo : demoData.content.demo,
            studyCase : demoData.content.studyCase,
            id : demoData.id,
            name : demoData.name
        }

        this.getLocationKeywords = this.getLocationKeywords.bind(this);
    }

    render() {
        return (
            <div> 
                <HeaderDemo></HeaderDemo>
                {this.props.children} 
                {/* <Switch> */}
                <Route exact path='/demo-page/:category/:demoId/case' render={ props => (
                    <StudyCase studyCase = {this.state.studyCase} />
                )} />
                {/* <Route path='/demo-page/:category/:demoId/tech' render={ props => {
                    <TechStack techStack = {this.state.techStack} />
                }} /> </Switch> */}
            </div>
        )
    }
}

export default DemoPage;