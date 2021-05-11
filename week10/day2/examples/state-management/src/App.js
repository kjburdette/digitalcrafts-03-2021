import "./App.css";
import React, { Component } from "react";
import Weather from "./Weather";
import Students from "./Students";
export default class App extends Component {
  // create the constructor (props)
  // invoke super inside of the constructor, pass it props as an argument
  // define this.state={}

  constructor(props) {
    super(props);
    // state management

    // the process of components passing data to each other
    // is called props

    // the process of a component managing it's own data
    // and preserving it in a holding space, temporarily
    // this is called state management
    // initializing state
    this.state = {
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: true,
      bunny: "👯‍♀️",
      restaurants: [
        {
          name: "uchi 🍣",
        },
        {
          name: "Taste of Texas 🐴",
        },
      ],
      monitors: 2,
      students: [
        { name: "Zachary Antosko", state: "TX" },
        { name: "Frankie Ferbrache", state: "ATL" },
        { name: "Gill Guimaraes", state: "GA" },
        { name: "Tatien Miller", state: "MIS" },
        { name: "Phillip Francis", state: "PA" },
        { name: "Kendall Burdette", state: "GA" },
        { name: "Randy Chong", state: "TX" },
        { name: "Carlo Carbonell", state: "FL" },
        {
          name: "Calvin Kling",
          state: "GA",
          photo:
            "https://media-exp1.licdn.com/dms/image/C5603AQGRq2r5QCrrGQ/profile-displayphoto-shrink_200_200/0/1615215441351?e=1626307200&v=beta&t=c90_HrI6O5ZXhRck18TDCN1NrS3Wr8qzKZ4xWyuSwMQ",
        },
        { name: "James Walden", state: "GA" },
        { name: "Taylor Lightbourne", state: "GA" },
        { name: "Taylor Nicholas", state: "GA" },
        { name: "Nischal Pahari", state: "GA" },
        { name: "Patrick Groves", state: "FL" },
        { name: "Jessica Haugen", state: "WA" },
        { name: "Randi Reyna", state: "TX" },
        { name: "Whitney Svoboda", state: "TX" },
        { name: "Jorge Gonzalez", state: "TX" },
        {
          name: "Michael Bulostin",
          state: "GA",
          photo:
            "https://media-exp1.licdn.com/dms/image/C4E03AQE6NvZDYk-SUA/profile-displayphoto-shrink_200_200/0/1602145883465?e=1626307200&v=beta&t=cmbuvKaIDo1y6d-uW2eqdiYbZB0YnB-_odCsibQhQB0",
        },
        { name: "Joey Troina", state: "NY" },
      ],
    };

    //this.setState({})
    // this is the built in function to manipulate any state variable
    // you will only use this.setState to change state.
  }

  render() {
    const { title, itIsRainingInHouston, bunny, restaurants } = this.state;

    return (
      <>
        <h1>State Management</h1>
        <p>{title}</p>
        <p>Is it raining in houston?</p>
        <Weather
          itIsRainingInHouston={itIsRainingInHouston}
          bunny={bunny}
          restaurants={restaurants}
          monitors={this.state.monitors}
        />
        <button
          onClick={() =>
            this.setState({
              itIsRainingInHouston: !itIsRainingInHouston,
            })
          }
        >
          {itIsRainingInHouston ? "Sun" : "Rain"}
        </button>

        <p>Counter {this.state.counter}</p>

        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1,
            })
          }
        >
          Subtract
        </button>
        <h1>Students of FS May 2021</h1>
        {this.state.students.map((student) => {
          return <Students student={student} />;
        })}
      </>
    );
  }
}



