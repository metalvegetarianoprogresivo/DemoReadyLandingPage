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
      console.log(this)
        return(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <Route exact path='/demo-page/:category/:demoId' render={props => (<div><DemoPage/></div>)}/>}/>
              <Route exact path='/demo-page/:category/:demoId/demo' render={props => (<div><HeaderDemo/><VideoDemo/></div>)}/>} />
              <Route exact path='/demo-page/:category/:demoId/case' component={StudyCase} />
              <Route exact path='/demo-page/:category/:demoId/credits' component={StudyCase} />
              <Route exact path='/demo-page/:category/:demoId/tech' component={TechStack} />
            
              <Route exact path='/demo-page/:pokemon' render={(props) => <VideoDemo {...props} isAuthed={true} />} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default Router;