
import React, { Component } from 'react';
import logo from './logo.svg';
import {Row, Col, Carousel} from 'react-materialize';
import DemoCard from './components/card/DemoCard'
import './App.css';



class App extends Component {
  render() {
    var cardData = {
      image: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
      title: 'Demo Title',
      description: 'I am a very simple card. I am good at containing small bits of information',
      linkTo: '#',
      linkText: 'Link text'
    }
    return (
      <span></span>
    );
  }
}

export default App;
