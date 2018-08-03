import React, {Component} from 'react'

import "./services.css";

import Comb from "./../../comb/comb";
import Hexagon from "./../../hexagon/hexagon";

class Services extends Component {
  render() {

    const categories = this.props.categories.map(category => category.name);

    return (
      <div className="services z-depth-2">
        <Comb>
          {
            categories.map((name,i) => <Hexagon key={name} text={name}/>)
          }
        </Comb>
      </div>
    )
  }
}

export default Services