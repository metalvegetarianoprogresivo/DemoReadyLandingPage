import { Parallax } from 'react-materialize';
import './StudyCase.css';
import React, { Component } from 'react';


class StudyCase extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      return (
        <div>
        <Parallax imageSrc={this.props.studyCase} />
        <div className="section white">
          <div className="row container">
            <h2 className="header">Study Case</h2>
            <p className="grey-text text-darken-3 lighten-3">This will be the study case information</p>
          </div>
        </div>
      </div>
      )
    }
  }

export default StudyCase;