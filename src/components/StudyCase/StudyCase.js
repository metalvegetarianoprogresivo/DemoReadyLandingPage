import React, { Component } from 'react';
import {Parallax} from 'react-materialize';
import './StudyCase.css';
import DemoPage from '../demoPage/DemoPage';

class StudyCase extends Component {
    render() {
        return (
            <div>
                <DemoPage></DemoPage>
                <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Study Case</h2>
                        <p className="grey-text text-darken-3 lighten-3">This will be the study case information</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyCase;