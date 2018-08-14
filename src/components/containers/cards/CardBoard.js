import React from 'react';
import { Row, Col, Container } from 'react-materialize';
import DemoCard from './../../card/DemoCard'
import './CardBoard.css'

const colNumber = 3;
const m = 12 / colNumber;
const s = 1;

 let createBoard = function(data) {
    var i = 0;
    var board = [];
    var columns = data.map((cardData, index) => <Col key={index} s={s} m={m}>
      <DemoCard
        image={cardData.image}
        title={cardData.title}
        description={cardData.description}
        linkTo={cardData.linkTo}
        linkText={cardData.linkText} />
    </Col>);
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

  const cardBoard = (props) => (
      <div className='cardboard'>
        <Container >
          {props.cardData && createBoard(props.cardData)}
        </Container>
      </div>
    );

export default cardBoard;