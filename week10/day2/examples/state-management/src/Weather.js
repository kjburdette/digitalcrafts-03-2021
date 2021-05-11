import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        <p>
          The weather in Houston is:{" "}
          {this.props.itIsRainingInHouston ? "🌧️ " : "🌞"}
        </p>
        <p>I want a bunny: {this.props.bunny}</p>
        <h1>Restaurants</h1>

        {this.props.restaurants.map((restaurant) => {
          return <p key={restaurant.name}>{restaurant.name}</p>;
        })}
        <p>Michael has this many monitors: {this.props.monitors}</p>
      </div>
    );
  }
}

export default Weather;