import React from "react";

/**
 * This class holds the functions for the textfield
 */

class Textfield extends React.Component {
  /**
   * This state holds an empty string which in the text field by default
   */
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @param {*} event
   *
   * handleChange updates the state on every keystroke
   */

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /**
   *
   * @param {*} event
   *
   * When user presses the submit button, this function checks if the user's input is correct.
   * If the input is correct, an alert will pop up that informs the user that the input is correct and a point will be added to the point counter.
   * If the input is incorrect, an alert will pop up that informs the user that it's incorrect.
   */

  handleSubmit(event) {
    if (this.props.english[this.props.count] === this.state.value) {
      alert("oikein");
      this.props.callBackCount(); //This function is from word.js
    } else {
      alert("väärin");
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Word in English:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Textfield;
