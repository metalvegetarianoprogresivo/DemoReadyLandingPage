import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import { getDemosByCategory, 
         getLocation,
         getDemoById,
         getUrl } from '../../../src/utils.js'

import './DemoPage.css';

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
            </div>
        ]
    }
}

export default DemoPage;