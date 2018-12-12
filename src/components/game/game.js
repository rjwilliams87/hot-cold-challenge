import React from "react";
import { connect } from "react-redux";
import Header from "../header/header.js";
import StatusSection from "../statusSection/statusSection.js";
import GuessSection from "../guessSection/guessSection.js";
import { restartGame, onMakeGuess } from "../../actions";
import "./game.css";

export class Game extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  }

  onMakeGuess(guess) {
    guess = parseInt(guess, 10);
    this.props.dispatch(onMakeGuess(guess));
  }

  render() {
    const { feedback, guesses } = this.props;
    const guessCount = this.props.guesses.length;
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

const mapStateToProps = state => ({
  correctAnswer: state.correctAnswer,
  guesses: state.guesses,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Game);
