import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="FooterLeft">
                <a href="#">Advertising</a>
                <a href="#">Business</a>
                <a href="#">How Search works</a>
                </div>
                <div className="FooterRight">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Settings</a>
                </div>
            </div>
        )
    }
}
