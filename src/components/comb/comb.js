import React, {Component} from 'react'
import "./comb.css"

class Comb extends Component {
    render() {
        return (
            <div className="comb">
                {this.props.children}
            </div>
        )
    }
}

export default Comb;
