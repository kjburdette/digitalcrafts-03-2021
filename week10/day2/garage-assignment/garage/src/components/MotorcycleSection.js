import React, { Component } from 'react'
import AmericanMotorcycles from './AmericanMotorcycles';
import ForeignMotorcycles from './ForeignMotorcycles';

export default class MotorcycleSection extends Component {
    render() {
        return (
            <div>
                <AmericanMotorcycles/>
                <ForeignMotorcycles/>
            </div>
        )
    }
}
