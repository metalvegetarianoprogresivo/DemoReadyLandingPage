import React, { Component } from 'react';
import './Credits.css';
import DemoPage from '../demoPage/DemoPage';

class Credits extends Component {
    render() {
        return(
            <div className='center'>
                <DemoPage />
                <img src='https://i0.wp.com/www.sopitas.com/wp-content/uploads/2015/12/giphy17.gif' alt='credits' />
            </div>
        );
    }
}

export default Credits;