import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props) {
        super(props);
        // the point of using the constructor in react is to initialize your state
        this.state = {
            // state is a container that can hold data and let us have access to it
            greeting: "",
            listOfPokemonCards: [],
            mapPoints: {},
            count: 0,
        }
    }


    render() {
        const setState = () => {
            
        }
        return (
            <div>
                <h1>Class.js</h1>
                <p>this is the count {this.state.count}</p>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Add</button>
                <button onClick={() => this.setState({
                    count: this.state.count - 1
                })}>Subtract</button>
            </div>
        )
    }
}

