import React, { Component } from 'react';
import {Row, Col, Container} from 'react-materialize';
import DemoCard from './DemoCard'
import './CardBoard.css'

class CardBoard extends Component {
    render(){
      var cardData = {
        image: 'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
        title: 'Demo Title',
        description: 'I am a very simple card. I am good at containing small bits of information',
        linkTo: '#',
        linkText: 'Link text'
      }
      return(
        <div className='cardboard'>
          <Container >
            <Row>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
            </Row>
            <Row>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
              <Col s={1} m={4}>
                  <DemoCard image={cardData.image} title={cardData.title} description={cardData.description} linkTo={cardData.linkTo} linkText={cardData.linkText}/>
              </Col>
            </Row>
        </Container>
        </div>
        
        );
    }
}

export default CardBoard