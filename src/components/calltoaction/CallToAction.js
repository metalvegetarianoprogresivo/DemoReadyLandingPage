import React, {Component} from 'react';
import {Button, Parallax} from 'react-materialize';
import './CallToAction.css'

import landing from "../../assets/images/landing.jpg";

class CallToAction extends Component {
  render() {
    return (
      <React.Fragment>
        <Parallax className="banner__parallax" imageSrc={landing}/>
        <div className="banner">
          <div className="banner__video">
            <iframe
              title='Lets Do Business'
              width="540"
              height="295"
              className="pitch"
              src="https://www.youtube.com/embed/SNoK5pyK73c?rel=0"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen></iframe>
          </div>
          <div className="banner__text-container">
            <h2>Let's do
              <b> Business</b>
            </h2>
            <div className="banner__underline"></div>
            <div className="banner__paragraph">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam cursus, est ac aliquam faucibus, quam lacus viverra mi,
              sed porta tellus est id nisi. Cras velit diam, fermentum a nibh vel, dapibus
              pellentesque justo. Nunc malesuada risus eget purus interdum volutpat.</div>
            <div>
              <Button node='a' href='#' className='banner__btn'>
                Go</Button>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default CallToAction;