import React, { Component } from 'react'
import AboutMe from "./AboutMe";
import "../App.css"

export default class AboutContainer extends Component {
    render() {
        return (
            <div className="AboutContainer">
                <p>About Container</p>
                <AboutMe />
            </div>
        )
    }
}
