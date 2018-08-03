import React, { Component } from 'react';
import  {Button, Section} from 'react-materialize';
import './CallToAction.css'

class CallToAction extends Component {
    render() {
        return(
          <Section key='go-to-action' className='content-wrap'>
            <div className="container-left">
                <iframe title='Lets Do Business' width="540" height="295" className="pitch" src="https://www.youtube.com/embed/SNoK5pyK73c?rel=0" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="container-right">
              <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus, est ac aliquam faucibus, quam lacus viverra mi, sed porta tellus est id nisi. Cras velit diam, fermentum a nibh vel, dapibus pellentesque justo. Nunc malesuada risus eget purus interdum volutpat.</div>
              <div>
                <Button node='a' href='#' className='calltoaction-button'> Let's Do Business</Button>
              </div>
            </div>
          </Section>
        );
    }
}

export default CallToAction;