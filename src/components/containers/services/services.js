import React, {Component} from 'react'

import "./services.css";

import Comb from "./../../comb/comb";
import Hexagon from "./../../hexagon/hexagon";

class Services extends Component {
  render() {
    return (
      <div className="services z-depth-2">
        <Comb>
          <Hexagon text="Digital"/>
          <Hexagon text="BigData"/>
          <Hexagon text="App Development"/>
          <Hexagon text="Test Automation" className="odd"/>
          <Hexagon text="Skye Search" className="odd"/>
        </Comb>
      </div>
    )
  }
}

export default Services