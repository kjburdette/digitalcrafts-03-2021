import React, { Component } from 'react';
import AmericanExCars from "./AmericanExCars";
import ForeignExCars from "./ForeignExCars";

export default class ExoticCarSection extends Component {
    render() {
        return (
            <div>
                <AmericanExCars/>
                <ForeignExCars/>
            </div>
        )
    }
}
