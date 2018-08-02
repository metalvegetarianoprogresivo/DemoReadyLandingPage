import React, {Component} from 'react'
import "./comb.css"

class Comb extends Component {
    render() {
        const children = this.props.children;
        return (
            <div className="comb">
                {this.props.children}
            </div>
        )
    }
}

export default Comb;
