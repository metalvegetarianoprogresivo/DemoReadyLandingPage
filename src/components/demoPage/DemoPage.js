import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import VideoDemo from '../../components/VideoDemo/VideoDemo'
import StudyCase from '../../components/StudyCase/StudyCase'
import Credits from '../../components/credits/Credits'
import TechStack from '../../components/techStack/TechStack'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from '../sidenav/sidenav.js'
import { getDemosByCategory, 
         getLocation,
         getDemoById,
         getUrl } from '../../../src/utils.js'

>>>>>>> 8579721cccf941fd2113a7880e260b0742708a73
import './DemoPage.css';

class DemoPage extends Component {

    getLocationKeywords = () => {
        let locationKeywords = getLocation();

        return locationKeywords
    }
    
    constructor(props) {
        super(props)

        let dataLocation = this.getLocationKeywords()
        let id = dataLocation[3]
        let category = dataLocation[2]

        let demoData = getDemoById(category, id)
        console.log(demoData)
        let url = getUrl()

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

    componentDidMount() {
        
    }

    render() {
        return [
            <div>
                <HeaderDemo></HeaderDemo>
<<<<<<< HEAD
                {/* <SideNav></SideNav> */}
                <div>
                    <Switch>
                        <Route exact path="/" component={VideoDemo} />
                        <Route exact path="/case" component={StudyCase} />
                        <Route exact path = "/demo" component = {VideoDemo} />
                    </Switch>
                </div>
||||||| merged common ancestors
                <Switch>
                    <Route exact path="/" component={VideoDemo} />
                    <Route exact path="/case" component={StudyCase} />
                    <Route exact path = "/demo" component = {VideoDemo} />
                </Switch>
=======
                {/* <Switch>
                    <Route path="/demo-page/:categoryId/:demoId/case" component={StudyCase} />
                    <Route path ="/demo-page/:categoryId/:demoId/demo" component = {VideoDemo} />
                    <Route path ="/demo-page/:categoryId/:demoId/credits" component = {Credits} />
                    <Route path ="/demo-page/:categoryId/:demoId/stack" component = {TechStack} />
                </Switch> */}
>>>>>>> 8579721cccf941fd2113a7880e260b0742708a73
            </div>
        ]
    }
}

export default DemoPage;