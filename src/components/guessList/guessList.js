import React from "react";
import "./guessList.css";

export default function GuessList(props) {
  const list = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));
  return (
    <div className="guessList">
      <ul>{list}</ul>
    </div>
  );
}
