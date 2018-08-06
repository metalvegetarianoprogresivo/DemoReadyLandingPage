import React, { Component } from 'react';
import HeaderDemo from '../../components/headerDemo/HeaderDemo'
import './VideoDemo.css';

class VideoDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // TO-DO src should be rendered from props
        return [
            <div class="video-container">
                <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
        ]
    }
}

export default VideoDemo;