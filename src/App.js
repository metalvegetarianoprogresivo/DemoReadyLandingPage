import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header';
import CallToAction from './components/calltoaction/CallToAction';
import Partnership from './components/partners/Partnership';
import Footer from './components/footer/footer'
import Services from "./components/containers/services/services"
import data from "./assets/data/services/services.json";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CallToAction></CallToAction>
        <Services data={data} />
        <footer id="partner">
          <Partnership/>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
