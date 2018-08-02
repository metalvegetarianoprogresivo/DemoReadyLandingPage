import React, { Component } from 'react';
import {Section} from 'react-materialize';
import './Partnership.css'

class Partnership extends Component {
    render(){
        return(
            <Section >
                <div className="content-wrap">
                    <div className="image-partner">image</div>
                    <div className="image-partner">image</div>
                    <div className="image-partner">image</div>
                    <div className="image-partner">image</div>
                    <div className="image-partner">image</div>
                </div>
            </Section>
        );
    }
}

export default Partnership;