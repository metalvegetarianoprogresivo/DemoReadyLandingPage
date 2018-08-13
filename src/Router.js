import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DemoPage from './components/demoPage/DemoPage';
import VideoDemo from './components/VideoDemo/VideoDemo';
import HeaderDemo from './components/headerDemo/HeaderDemo';
import StudyCase from './components/StudyCase/StudyCase';
import Credits from './components/credits/Credits';
import App from './App';
import TechStack from './components/techStack/TechStack';

class Router extends Component{
  constructor(props) {
    super(props)
  }

    render() {
        return(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <DemoPage>
                <Route path='/demo-page/:category/:demoId/demo' component={VideoDemo} />
                <Route path='/demo-page/:category/:demoId/case' component={StudyCase} />
                <Route path='/demo-page/:category/:demoId/credits' component={Credits} />
                <Route path='/demo-page/:category/:demoId/tech' component={TechStack} />
              </DemoPage>
            </Switch>
          </BrowserRouter>
        );
    }
}

export default Router;