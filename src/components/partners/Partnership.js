import React, { Component } from 'react';
import {Section, Row, Col} from 'react-materialize';
import './Partnership.css'

class Partnership extends Component {
    render(){
        return(
            <Section>
                <Row>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/07/elastic-logo.jpg'/>
                    </Col>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/08/microsoft-logo-300x64.png'/>
                    </Col>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/07/amazon-logo.jpg'/>
                    </Col>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/07/cloudera-logo.jpg'/>
                    </Col>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/07/horton-logo.jpg'/>
                    </Col>
                    <Col s={1} m={2}>
                    <img className="image-partner"  src='https://www.intersysconsulting.com/wp-content/uploads/2016/07/mapr-logo.jpg'/>
                    </Col>
                </Row>
            </Section>
        );
    }
}

export default Partnership;