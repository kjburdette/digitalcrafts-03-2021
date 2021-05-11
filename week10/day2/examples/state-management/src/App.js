import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

  // create the constructor (props)
  // invoke super inside of the constructor, pass it props as an arguement
  // define this.state{}

  constructor(props) {
    super(props);
    // state management
  
    // the process of components passing data to each other
    // is called props
  
    // the process of a component managing it's own data
    // and preserving it in a holding space, temprarily
    // this is called state management
    this.state = {
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: true,
    }
    // this.setState
    // this is the built in function to manipute any state variable
    // you will only use this.setState to change state
  }

  
  render() {
    const {counter, title, itIsRainingInHouston} = this.state;
    return (
      <>
        <h1>State Management</h1>
        <p>{title}</p>
        <p>
          Is it raining in houston? {itIsRainingInHouston ? (
            <div>
              <p>Yup it's a raining</p>
            </div>
          ) : (
            <div>
            <p>Nope, no raining here. </p>
            </div>
          )}
        </p>
        <button onClick={() =>this.setState({itIsRainingInHouston : !itIsRainingInHouston})}>{itIsRainingInHouston ? "Beautiful Sunny Day" : "Ahh it's raining"}</button>
        <p>Counter {counter}</p>
        <button onClick={() =>this.setState({counter: counter + 1})}>Add</button>
        <button onClick={() =>this.setState({counter: counter - 1})}>Subtract</button>
      </>
    )
  }
}



