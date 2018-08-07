import React, {Component} from 'react'

import "./services.css";

import Comb from "./../../comb/comb";
import Hexagon from "./../../hexagon/hexagon";
import Cardboard from "./../../card/CardBoard";
import CategoriesInfo from "./../../categories-info/categories-info";

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      cardboard: null
    }
  }

  selectCategory = (text) => {
    const {description, name, cardboard} = this
      .props
      .data
      .find(category => category.name === text)

    this.setState({name, cardboard, description})
  }

  componentDidMount() {
    const defaultCategory = this.props.data[0];

    this.setState({description: defaultCategory.description, cardboard: defaultCategory.cardboard})

  }

  render() {

    const data = this.props.data;

    const categories = this
      .props
      .data
      .map(category => category.name);

    return (
      <div className="services z-depth-2">
        <Comb>
          {categories.map((name, i) => <Hexagon key={name} selectCategory={this.selectCategory} text={name}/>)}
        </Comb>
        <CategoriesInfo info={this.state.description}/>
        <Cardboard cardData={this.state.cardboard}/>
      </div>
    )
  }
}

export default Services