import React, { Component } from 'react';
import './VideoDemo.css';

class VideoDemo extends Component {
    render() {
        // TO-DO src should be rendered from props
        return [
            <div class="video-container">
                <iframe src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" title='demo' frameborder="0" allowfullscreen></iframe>
            </div>
        ]
    }
}

export default VideoDemo;