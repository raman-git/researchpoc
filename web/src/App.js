import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Header from './components/layout/Header'
import ReportList from './components/ReportList'
import Interests from './components/Interests';
//import { render } from '@testing-library/react';

class App extends Component {
  state = {
    reports: [],
    interests: [],
    interestsx: [
      {
          type:'xCompany', data:[
              {id:1, name:"MicroSoft (MSFT)"},
              {id:2, name:"Amazon (AMZN)"},
          ]
      },
      {
          type:'Anslyst', data:[
              {id:3, name:"John Smith"},
              {id:4, name:"Jane Doe"},
          ]
      }
  ]
  };
  componentDidMount() {
    let apiRoot = this.getUrlVars()["apiroot"] || '/api/';
    axios.get(apiRoot + "feed")
    .then(res => this.setState({reports: res.data}))

    axios.get(apiRoot + "interests")
    .then(res => this.setState({interests: res.data}))
    console.log('apiroot = ' + apiRoot);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <ReportList reports={this.state.reports} />
            </React.Fragment>
          )}>
            
          </Route>
          <Route path="/interest" >
            <Interests interests={this.state.interests} />
          </Route>
        </div>
      </Router>
    );
  }

  getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
}


export default App;
