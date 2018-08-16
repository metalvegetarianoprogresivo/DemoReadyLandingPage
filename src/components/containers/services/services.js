import React, {Component} from 'react'

import "./services.css";

import Cardboard from "./../cards/CardBoard";
import Categories from "./../../categories/categories";
import CategoriesInfo from "./../../categoriesInfo/categoriesInfo";

import ResponsiveCategories from './../../responsiveCategories/responsiveCategories';

import {Row, Container} from 'react-materialize';

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      cardboard: null,
      windowWidth: window.innerWidth
    }
  }

  handleResize = () => {
    const windowWidth = window.innerWidth;
    this.setState({windowWidth})
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  compo

  render() {
    let {windowWidth} = this.state;

    if (windowWidth > 768) {
      return (
        <React.Fragment>
          <div id='demos' className="services row">
            <Categories data={this.props.data} selectCategory={this.selectCategory}/>
            <CategoriesInfo description={this.state.description} name={this.state.name}/>
          </div>
          <Cardboard cardData={this.state.cardboard}/>
        </React.Fragment>
      )
    } else {
      return (
        <Row>
          <Container>
            <ResponsiveCategories
              data={this.props.data}
              selectCategory={this.selectCategory}/>
          </Container>
        </Row>
      )
    }

  }
}

export default Services