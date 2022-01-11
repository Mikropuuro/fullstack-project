import "./App.css";
import React from "react";

class Word extends React.Component {
  state = { words: [{ finnish: "jänis", english: "rabbit" }] };

  async componentDidMount() {
    let hr = await fetch("http://localhost:8080/words");
    let data = await hr.json();
    this.setState({ words: data });
  }

  render() {
    var finnish = this.state.words.map((word) => <li>{word.finnish}</li>);
    var english = this.state.words.map((word) => <li>{word.english}</li>);

    return (
      <div>
        <ul>{finnish}</ul>
        <ul>{english}</ul>
      </div>
    );
  }
}

export default Word;
