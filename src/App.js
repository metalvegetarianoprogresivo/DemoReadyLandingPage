import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import CallToAction from './components/calltoaction/CallToAction'

import Services from "./components/containers/services/services"

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
        <Services />
      </div> 
         
    );
  }
}

export default App;
