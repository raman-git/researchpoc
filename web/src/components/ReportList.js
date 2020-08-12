import React, { Component } from 'react';
import ReportSummary from './ReportSummary'
import PropTypes from 'prop-types'
class ReportList extends Component {
    render() {
        return this.props.reports.map((report) => (
            <ReportSummary key={report.reportid} report={report}/>
        ));
    }
}

ReportList.propTypes= {
    reports: PropTypes.array.isRequired
}
export default ReportList;
