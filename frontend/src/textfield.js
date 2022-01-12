import React from "react";

class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", counter: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.props.english[0] === this.state.value) {
      alert("oikein");
    } else {
      alert("väärin");
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
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
