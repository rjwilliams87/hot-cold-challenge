import React from "react";
import { connect } from "react-redux";
import Header from "../header/header.js";
import StatusSection from "../statusSection/statusSection.js";
import GuessSection from "../guessSection/guessSection.js";
import "./game.css";

export class Game extends React.Component {
  render() {
    return (
      <div className="game-container">
        <Header />
        <main>
          <GuessSection />
          <StatusSection />
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
