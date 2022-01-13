import React from "react";

class Textfield extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", count: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.props.english[this.props.count] === this.state.value) {
      alert("oikein");
      this.props.callBackCount();
      this.props.callBackId();
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
