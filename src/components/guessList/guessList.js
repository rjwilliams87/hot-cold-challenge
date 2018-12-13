import React from "react";
import { connect } from "react-redux";
import "./guessList.css";

export function GuessList(props) {
  const list = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));
  return (
    <div className="guessList">
      <ul>{list}</ul>
    </div>
  );
}

const mapPropsToState = state => ({
  guesses: state.guesses
});

export default connect(mapPropsToState)(GuessList);
