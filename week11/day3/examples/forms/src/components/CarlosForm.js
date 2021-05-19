import React, { Component } from "react";
import "../App.css";

// 1. How many input values are going to need to be controlled?
// 2. Create the state variables for the number of input values to be controlled
// 3. In order to make an input value controlled, you need to set it's value = to this.state.nameOfInput
// 4. You need to have an onchange on that input field, so that you can change the state of that input field.
// 5. onChange and other event handlers, have access to the event object.
// 6. Use e.target.value to get the value inside of the input field.
// 7. this.setState({}) the state value to the e.target.value
// 8. You need to write a submit function.  Call it whatever you want.
// 9. Add onSubmit to your form, make it reference the submit function you created in step 8.
// 10.Because onSubmit is an event handler, you have access to the event object.
// 11.You need to do event.preventDefault() to stop the page from rerendering and clearing your form
// 12.Finish out the function to do the necessary functionality you want when you hit submit.

export default class CarlosForm extends Component {
  state = {
    streamerHandle: "",
  };

  handleStreamerSubmission = (event) => {
    event.preventDefault();
    console.log("changing the state value of", this.state.streamerHandle);
  };

  render() {
    return (
      <div>
        <h1 className="shipping-form-header">Carlos Form</h1>
        <div className="shipping-form-container">
          <form
            action=""
            className="shipping-form"
            onSubmit={this.handleStreamerSubmission}
          >
            <input
              className="shipping-input-text-carlo"
              type="text"
              placeholder="Streamer Handle"
              value={this.state.streamerHandle}
              onChange={(e) =>
                this.setState({
                  streamerHandle: e.target.value,
                })
              }
            />

            <input
              name="submit"
              className="shipping-input-button"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}