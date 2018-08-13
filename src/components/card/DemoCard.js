import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import './DemoCard.css'

const demoCard = (props) => (
  <Card
    header={<CardTitle image={props.image} ></CardTitle>}
    actions={[<a key={props.linkText} href={props.linkTo}>{props.linkText}</a>]}
    title={props.title}
    className='demo-card'
    reveal={<p dangerouslySetInnerHTML={{ __html: props.description.replace(/\n/g, '<br/>') }}></p>}>
  </Card>
);

export default demoCard;