import "./App.css";
import React from "react";
import TextfieldEnglish from "./textfieldenglish";

/**
 * This class holds functions for guessing the words in Finnish.
 */

class WordEnglish extends React.Component {
  /**
   * This state holds words in the same format as they are in the database.
   * The count variable works as counting the player's points and also switches between the words in the UI.
   * If there is no connection to the database, the UI will display the word pair below.
   */
  state = {
    words: [{ id: 0, finnish: "jänis", english: "rabbit" }],
    count: 0,
  };

  /**
   * This componentDidMount fetches all the words from the database and sets them in the state.
   */

  async componentDidMount() {
    let hr = await fetch("http://localhost:8080/words");
    let data = await hr.json();
    this.setState({ words: data });
  }

  /**
   * This function is given as a parameter to the TextfieldEnglish function.
   *
   */

  callBackCount = () => {
    let tmpCount = this.state.count + 1;
    this.setState({ count: tmpCount });
  };

  /**
   * This function checks if the user's points is the same as the length of the database.
   * If they are the same, it will inform the user about winning the game
   */

  winCheck = () => {
    if (this.state.count === this.state.words.length) {
      alert("You knew all the words! Congratulations!");
    }
  };
  render() {
    /**
     * These two variables are arrays. "finnish"-variable holds the finnish words and
     * the "english"-variable holds the english words.
     *
     * Both of them are given as props to the TextfieldEnglish-function
     */
    var finnish = this.state.words.map((word) => word.finnish);
    var english = this.state.words.map((word) => word.english);
    console.log(finnish);
    this.winCheck();

    return (
      <div>
        <h1>Try to guess the word in Finnish</h1>
        Points: {this.state.count}
        <ul>
          <li>
            {english[this.state.count]}
            {
              <TextfieldEnglish
                count={this.state.count}
                english={english}
                finnish={finnish}
                callBackCount={this.callBackCount}
              />
            }
          </li>

          <br />
        </ul>
      </div>
    );
  }
}

export default WordEnglish;
