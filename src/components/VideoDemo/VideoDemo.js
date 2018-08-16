import React from 'react';
import './VideoDemo.css';

const videoDemo = (props) => (
  <div class="demo video-container">
    <iframe
      src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
      title='Video Demo'
      frameborder="0"
      allowfullscreen></iframe>
  </div>
);

export default videoDemo;