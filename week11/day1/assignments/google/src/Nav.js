import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div className="NavBar">
                <div className="NavLeft">
                <a href="#">About</a>
                <a href="#">Store</a>
                </div>
                <div className="NavRight">
                <a href="#">Gmail</a>
                <a href="#">Images</a>
                </div>
            </div>
        )
    }
}
