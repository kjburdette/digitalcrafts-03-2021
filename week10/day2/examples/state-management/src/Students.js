import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}: is my student</p>
            </div>
        )
    }
}
