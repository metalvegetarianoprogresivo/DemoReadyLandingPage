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
      description: null
    }
  }

  selectCategory = (name) => {
    const description = this
      .props
      .categories
      .filter(category => category.name === name)
      .map(category => category.description)

    this.setState({description})
  }


  componentDidMount(){
    //todo: select default category

  }

  render() {

    const categories = this
      .props
      .categories
      .map(category => category.name);

    return (
      <div className="services z-depth-2">
        <Comb>
          {categories.map((name, i) => <Hexagon key={name} selectCategory={this.selectCategory} text={name}/>)}
        </Comb>
        <CategoriesInfo info={this.state.description}/>
        <Cardboard/>
      </div>
    )
  }
}

export default Services