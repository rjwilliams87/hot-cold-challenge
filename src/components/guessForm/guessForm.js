import React from "react";
import "./guessForm.css";

export default class GuessForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = "";
    this.input.focus();
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="number"
          placeholder="enter guess here"
          min="1"
          max="100"
          autoComplete="off"
          ref={input => (this.input = input)}
          required
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
}
