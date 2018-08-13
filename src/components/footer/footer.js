import React, { Component } from 'react';
import './footer.css';
import {Footer, Icon} from 'react-materialize'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

class Credits extends Component {
    render() {
        return(
            <Footer copyrights='© 2018 Intersys Consulting, Inc. All Rights Reserved.'
            links={
                <ul className='social-media'>
                    <li><a href='#'><FaFacebookSquare /></a></li>
                    <li><a href='#'><FaTwitterSquare /></a></li>
                    <li><a href='#'><FaLinkedin /></a></li>

                </ul>
                
            }
            >
            <ul className='footer-links'>
                <li><a className="grey-text text-lighten-3" href="#!">Company</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Partners</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy & Terms of Use</a></li>
            </ul>
            </Footer>
        );
    }
}

export default Credits;