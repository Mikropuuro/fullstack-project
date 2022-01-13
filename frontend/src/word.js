import "./App.css";
import React from "react";
import Textfield from "./textfield";

class WordFinnish extends React.Component {
  state = {
    words: [{ id: 0, finnish: "jänis", english: "rabbit" }],
    count: 0,
  };

  async componentDidMount() {
    let hr = await fetch("http://localhost:8080/words");
    let data = await hr.json();
    this.setState({ words: data });
  }

  callBackCount = () => {
    let tmpCount = this.state.count + 1;
    this.setState({ count: tmpCount });
  };

  callBackId = () => {
    let tmpId = this.state.id + 1;
    this.setState({ id: tmpId });
  };

  winCheck = () => {
    if (this.state.count === this.state.words.length) {
      alert("You knew all the words! Congratulations!");
    }
  };
  render() {
    var finnish = this.state.words.map((word) => word.finnish);
    var english = this.state.words.map((word) => word.english);
    console.log(finnish);
    this.winCheck();

    return (
      <div>
        <h1>Try to guess the word in English</h1>
        Points: {this.state.count}
        <ul>
          <li>
            {finnish[this.state.count]}
            {
              <Textfield
                count={this.state.count}
                id={this.state.id}
                english={english}
                finnish={finnish}
                callBackCount={this.callBackCount}
                callBackId={this.callBackId}
              />
            }
          </li>

          <br />
        </ul>
      </div>
    );
  }
}

export default WordFinnish;
