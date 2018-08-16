import React  from 'react';
import './VideoDemo.css';

const videoDemo = (props) =>(
            <div class="video-container">
                <video width="100%" height="100%" controls>
                    <source 
                        src="https://intersysconsulting.sharepoint.com/mexico/_layouts/15/Lightbox.aspx?url=https%3A%2F%2Fintersysconsulting.sharepoint.com%2Fmexico%2FShared%20Documents%2FIntersys%20Projects%2FDemo%20Ready%2FPPTs%20and%20Videos%2FDashboards%2FDashboards%20Video.mp4"
                        type="video/mp4"/>
                </video>
            </div>
);

export default videoDemo;