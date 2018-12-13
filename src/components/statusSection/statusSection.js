import React from "react";
import GuessCount from "../guessCount/guessCount.js";
import GuessList from "../guessList/guessList.js";

export default function StatusSection(props) {
  return (
    <section>
      <GuessCount />
      <GuessList />
    </section>
  );
}
