import React, { Component } from 'react'
import InterestItem from './InterestItem'

export default class Interests extends Component {
    componentDidMount() {
    }
    render() {
        const getInterestContent = interests => {
            let content = [];
            for (let interest of interests) {
                //push header
                content.push(<div key={Math.random()} className="interestType"> {interest.type}</div>);
                for (let interestData of interest.data) {
                    content.push(<InterestItem key={interestData.id} interest={interestData} />)
                }
            }
            return content;
        };
        return <div> {getInterestContent(this.props.interests)}</div>
    }
}
