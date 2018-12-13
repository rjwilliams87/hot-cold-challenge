import React from "react";
import { connect } from "react-redux";
import "./guessForm.css";
import { onMakeGuess } from "../../actions";

export class GuessForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(onMakeGuess(value));
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

export default connect()(GuessForm);
