import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DemoPage from './components/demoPage/DemoPage';
import VideoDemo from './components/VideoDemo/VideoDemo';
import StudyCase from './components/StudyCase/StudyCase';
import Credits from './components/credits/Credits';
import App from './App';
import TechStack from './components/techStack/TechStack';

class Router extends Component{
    render() {
        return(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <Route exact path='/demo-page/:category/:demoId' component={DemoPage} />
              <Route exact path='/demo-page/:category/:demoId/demo' component={VideoDemo} />
              <Route exact path='/demo-page/:category/:demoId/case' component={StudyCase} />
              <Route exact path='/demo-page/:category/:demoId/credits' component={StudyCase} />
              <Route exact path='/demo-page/:category/:demoId/tech' component={TechStack} />
              {/* <Route exact path='/demo-page/:pokemon' component={VideoDemo} /> */}
            </Switch>
          </BrowserRouter>
        );
    }
}

export default Router;