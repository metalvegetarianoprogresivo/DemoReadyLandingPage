
import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header'
import CallToAction from './components/calltoaction/CallToAction'



class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
      </div> 
         
    );
  }
}

export default App;
