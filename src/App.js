import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';

import Services from "./components/containers/services/services"


//todo: change const for json
const categories = [
  {name:"data",description:"lorem"},
  {name:"analytics",description:"ipsum"},
  {name:"digital"},
  {name:"search"},
  {name:"agile"},
  {name:"cloud"},
  {name:"sourcing"}
];

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
        <Services categories={categories} />
        <footer id="partner">
          <Partnership/>
        </footer>
      </div>
    );
  }
}

export default App;
