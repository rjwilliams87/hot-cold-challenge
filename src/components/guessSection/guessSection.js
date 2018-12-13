import React from "react";
import Feedback from "../guessFeedback/feedback.js";
import GuessForm from "../guessForm/guessForm.js";

export default function GuessSection(props) {
  return (
    <section>
      <Feedback />
      <GuessForm />
    </section>
  );
}
