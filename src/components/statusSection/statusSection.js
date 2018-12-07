import React from "react";
import GuessCount from "../guessCount/guessCount.js";
import GuessList from "../guessList/guessList.js";

export default function StatusSection(props) {
  const guessCount = props.guesses.length;
  return (
    <section>
      <GuessCount count={guessCount} />
      <GuessList guesses={props.guesses} />
    </section>
  );
}
