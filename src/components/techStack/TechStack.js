import React, { Component } from 'react';
import './TechStack.css';
import DemoPage from '../demoPage/DemoPage';

class TechStack extends Component {
    render(){
        return(
            <div>
                <DemoPage></DemoPage>
                <img src='https://tech.foodora.com/wp-content/uploads/sites/11/2018/01/stack.png' />
            </div>
        );
    }
}

export default TechStack;