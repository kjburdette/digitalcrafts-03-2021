import React, { Component } from 'react'

export default class ClassBased extends Component {

    state = {
        loadingMessage: "loading",
        status: "Code Red",
    }

    render() {
        return (
            <div>
                <h1>Class Based Component</h1>
                <p>{this.state.loadingMessage}</p>
                <p>{this.state.status}</p>
                <button onClick={() => this.setState({loadingMessage:"finished"})}>Finished Loading</button>
                <button onClick={() => this.setState({status:"Code Green"})}>Status</button>
            </div>
        )
    }
}
