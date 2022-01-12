import "./App.css";
import React from "react";
import Textfield from "./textfield";

class WordFinnish extends React.Component {
  state = { words: [{ id: null, finnish: "jänis", english: "rabbit" }] };

  async componentDidMount() {
    let hr = await fetch("http://localhost:8080/words");
    let data = await hr.json();
    this.setState({ words: data });
  }

  render() {
    var finnish = this.state.words.map((word) => <li>{word.finnish}</li>);
    var english = this.state.words.map((word) => word.english);
    console.log(english);

    return (
      <div>
        <ul>{finnish}</ul>
        <Textfield english={english} />
      </div>
    );
  }
}

export default WordFinnish;
