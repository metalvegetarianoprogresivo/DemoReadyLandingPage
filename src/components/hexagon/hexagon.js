import React, {Component} from 'react';

import './hexagon.css';

import teamwork from "./../../assets/svg/006-robotic.svg";

class Hexagon extends Component {
  handleClick = () => {
    this
      .props
      .selectCategory(this.props.text)
  }

  render() {
    const text = this.props.text;
    return (
      <div>

        {text &&
        <h1>
          {text}
        </h1>
        }
      </div>
    )
  }
}

export default Hexagon;
