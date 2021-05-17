import './App.css';
import House from './components/House';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <House/>
      </div>
    )
  }
}


