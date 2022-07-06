
import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
// import PropTypes from 'prop-types'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={10} country='us' category='general' />
      </div>
    )
  }
}

