import React from "react";
import "./nav.css";

export default function Nav(props) {
  return (
    <ul>
      <li>
        <a href="#what" aria-label="How to play">
          What?
        </a>
      </li>
      <li>
        <a
          href="#feedback"
          aria-label="Start new game"
          onClick={() => {
            props.restartGame();
          }}
        >
          New Game
        </a>
      </li>
    </ul>
  );
}
