
import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';



class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
        <footer id="partner">
          <Partnership/>
        </footer>
      </div>
    );
  }
}

export default App;
