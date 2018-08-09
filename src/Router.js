import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DemoPage from './components/demoPage/DemoPage';
import App from './App';

class Router extends Component{
    render() {
        return(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <Route path='/demo-page/:categoryId/:demoId' component={DemoPage} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default Router;