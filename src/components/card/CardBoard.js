import React, {Component} from 'react';
import {Row, Col, Container} from 'react-materialize';
import DemoCard from './DemoCard'
import './CardBoard.css'

const colNumber = 3;
const m = 12 / colNumber;
const s = 1;

class CardBoard extends Component {

  createBoard = (data) => {
    var i = 0;
    var board = [];
    var columns = data.map(cardData => <Col s={s} m={m}><DemoCard
      image={cardData.image}
      title={cardData.title}
      description={cardData.description}
      linkTo={cardData.linkTo}
      linkText={cardData.linkText}/></Col>);
    var _columns = [];
    var row = 1;

    columns.forEach(col => {
      if (i < colNumber) {
        _columns.push(col);
        i++;
      } else {
        board.push(
          <Row key={row++}>{_columns.slice(0)}</Row>
        );
        i = 1;
        _columns = [];
        _columns.push(col);
      }
    });
    if (_columns.length <= colNumber) {
      board.push(
        <Row key={row++}>{_columns.slice(0)}</Row>
      );
    }
    return board;
  }

  render() {
    return (
      <div className='cardboard'>
        <Container >
          {this.props.cardData && this.createBoard(this.props.cardData)}
        </Container>
      </div>
    );
  }
}

export default CardBoard;