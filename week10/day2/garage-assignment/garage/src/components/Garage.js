import React, { Component } from 'react'
import MuscleCarSection from './MuscleCarSection';
import ExoticCarSection from './ExoticCarSection';
import MotorcycleSection from './MotorcycleSection';

export default class Garage extends Component {
    render() {
        return (
            <div>
                <MuscleCarSection />
                <ExoticCarSection />
                <MotorcycleSection />
            </div>
        )
    }
}
