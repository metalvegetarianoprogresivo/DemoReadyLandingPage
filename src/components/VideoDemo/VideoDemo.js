import React, { Component } from 'react';
import './VideoDemo.css';
import { getLocation,
         getDemoById } from '../../../src/utils.js'

class VideoDemo extends Component {

  getSrcVideo = (location) => {
    let id = location[2]
    let category = location[1] 
    let demo = getDemoById(category, id)
    
    return demo.content.demo
  }

  constructor(props) {
    super (props) 

    let location = getLocation()
    this.state = {
        src : this.getSrcVideo(location)
       }
    }

  render() {
    return(
      <div class="demo video-container">
        <video width="100%" height="100%" controls="true">
          <source src={this.state.src} type="video/mp4" />
        </video>
      </div>
    )
  }
}


export default VideoDemo;