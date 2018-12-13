import React from "react";
import { connect } from "react-redux";
import "./guessCount.css";

export function GuessCount(props) {
  return (
    <div className="count-container">
      <h2 className="count-header">
        Guess #<span>{props.count}</span>
      </h2>
    </div>
  );
}

const mapPropsToState = state => ({
  count: state.guesses.length
});

export default connect(mapPropsToState)(GuessCount);
