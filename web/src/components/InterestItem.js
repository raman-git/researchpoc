import React, { Component } from 'react';
import PropTypes from 'prop-types'
class InterestItem extends Component {
    
    render() {
        
        return (
            <div className="interest"> {this.props.interest.name} </div>
        )

    }
    
}


export default InterestItem;
