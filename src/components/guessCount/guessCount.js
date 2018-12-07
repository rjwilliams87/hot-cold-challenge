import React from "react";
import "./guessCount.css";

export default function GuessCount(props) {
  return (
    <div className="count-container">
      <h2 className="count-header">
        Guess #<span>{props.count}</span>
      </h2>
    </div>
  );
}
