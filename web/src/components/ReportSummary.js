import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ReportSummary extends Component {
    
    render() {
        const {reportid, title, summary, authors, pubtime} = this.props.report;
        
        return (
            <div className="list-item">
                <a className="list-item-title" href={reportid + ".html"}> {title}</a>
                <div className="list-item-summary">{summary.substring(0, 60)}...</div>
                <div className="list-item-author">{this.getAuthors(authors)}</div>
                <div className="list-item-pubdate">{pubtime}</div>
            </div>
        )

    }
      getAuthors = (authors) => {
        var authorText = '';
        for (var j = 0; j < authors.length; j++) {
            if (j > 0) authorText += ", ";
            authorText += authors[j];
        }
        return authorText;
       
      } 
        
    
}

ReportSummary.propTypes= {
    report: PropTypes.object.isRequired
}
export default ReportSummary;
