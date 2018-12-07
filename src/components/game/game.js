import React from "react";
import Header from "../header/header.js";
import StatusSection from "../statusSection/statusSection.js";
import GuessSection from "../guessSection/guessSection.js";
import "./game.css";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make Your Guess!"
    };
  }

  restartGame() {
    this.setState({
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make Your Guess!"
    });
  }

  onMakeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Please enter a valid number"
      });
      return;
    }

    const diff = Math.abs(guess - this.state.correctAnswer);
    let feedback;
    if (diff >= 50) {
      feedback = "Freezing";
    } else if (diff >= 30) {
      feedback = "Cold";
    } else if (diff >= 15) {
      feedback = "Warm";
    } else if (diff >= 8) {
      feedback = "Hot";
    } else {
      feedback = "You got it!";
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;
    return (
      <div className="game-container">
        <Header restartGame={() => this.restartGame()} />
        <main>
          <GuessSection
            count={guessCount}
            feedback={feedback}
            onMakeGuess={guess => this.onMakeGuess(guess)}
          />
          <StatusSection guesses={guesses} />
        </main>
      </div>
    );
  }
}
