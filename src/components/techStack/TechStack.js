import React, { Component } from 'react';
import './TechStack.css';
import { getLocation, getDemoById } from '../../../src/utils.js'

class TechStack extends Component {

    getTechStack = (location) => {
        let id = location[2]
        let category = location[1] 
        let demo = getDemoById(category, id)
        
        return demo.content.techStack
    }

    constructor(props) {
        super(props)
        
        let location = getLocation()
        this.state = {
            techStack : this.getTechStack(location)
        }
    }

    render() {
        console.log(this.state.techStack)
        return (
            <div>
                <img src={this.state.techStack} />
            </div>
        );
    }
}

export default TechStack;