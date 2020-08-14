import React, { Component } from 'react';
import PropTypes from 'prop-types'
class InterestItem extends Component {
    
    render() {
        const {name, price, trend} = this.props.interest;
        let className = "price " + trend;
        return ( 
            <div className="interest"> {name} <span className={className}>{price}</span></div>
        )
    }
}

export default InterestItem;
