import React, {Component} from 'react'

import "./services.css";

import Cardboard from "./../../card/CardBoard";
import Categories from "./../../categories/categories";
import CategoriesInfo from "./../../categoriesInfo/categoriesInfo";

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
    const {name, description, cardboard} = this.props.data[0];

    this.setState({name, description, cardboard})
  }

  render() {
    const categories = this
      .props
      .data
      .map(category => ({name: category.name, info: category.info}));

    return (
      <React.Fragment>
        <div className="services">
          <Categories data={this.props.data} selectCategory={this.selectCategory}/>
          <CategoriesInfo description={this.state.description} name={this.state.name}/>
        </div>
        <Cardboard cardData={this.state.cardboard}/>
      </React.Fragment>
    )
  }
}

export default Services