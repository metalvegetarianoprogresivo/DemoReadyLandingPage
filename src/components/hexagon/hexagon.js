import React, {Component} from 'react';

import './hexagon.css';

class Hexagon extends Component {
  handleClick = () => {
    this
      .props
      .selectCategory(this.props.text)
  }

  render() {
    const text = this.props.text;
    return (
      <div
        className={`hexagon ${this.props.className || ''}`}
        onClick={this.handleClick}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.0">
          <defs xmlns="http://www.w3.org/2000/svg">
            <filter id="dropshadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="2" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.2"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            className="hexagon__figure"
            stroke="#245372"
            strokeWidth="8"
            fill="#49a7e4"
            width="100"
            height="100"
            d="M87.09526217584805,28.46081613799784 L50.00000431597698,6.921630847113185 L12.904743440231098,28.46081613799784 L12.904743440231098,71.53918068801742 L50.00000431597698,93.07836296302717 L87.09526217584805,71.53918068801742 L87.09526217584805,28.46081613799784 z"/>
        </svg>

        {text && <h1 className="hexagon__text">
          {text}
        </h1>
}
      </div>
    )
  }
}

export default Hexagon;
