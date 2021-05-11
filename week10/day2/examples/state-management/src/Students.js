import React, { Component } from "react";

class Students extends Component {
  render() {
    const { name, state, photo } = this.props.student;
    console.log(this.props);
    return (
      <div>
        <p>{name}: is my student</p>
        <p>{state}: is my state</p>
        {photo && <img src={photo} alt="" style={{ borderRadius: "50%" }} />}
      </div>
    );
  }
}

export default Students;
