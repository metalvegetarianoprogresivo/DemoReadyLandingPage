import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';
import './DemoCard.css'

class DemoCard extends Component {
    render() {
        return(
            <Card horizontal 
                header={<CardTitle image={this.props.image} ></CardTitle>} 
                actions={[<a key={this.props.linkText} href={this.props.linkTo}>{this.props.linkText}</a>]}
                title={this.props.title}>
              <p className="left-align">{this.props.description}</p>
            </Card>  
        );
    }
}

export default DemoCard;