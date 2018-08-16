import React, { Component } from 'react';
import './Credits.css';
import DemoPage from '../demoPage/DemoPage';
import ConsultantCard from '../consultantCard/consultantCard'
import Row from '../../../node_modules/react-materialize/lib/Row';

class Credits extends Component {
    render() {
        return(
            <div>
                <div className='center'>
                    <Row>
                        <ConsultantCard ></ConsultantCard>
                        <ConsultantCard></ConsultantCard>
                    </Row>
                </div>
            </div>

        );
    }
}

export default Credits;