import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <input type="text" className="searchbar"></input>
                <div className="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
                </div>
            </div>
        )
    }
}
