import React from "react";
import { connect } from "react-redux";
import { restartGame } from "../../actions";
import "./nav.css";

export function Nav(props) {
  return (
    <ul className="topNav">
      <li className="topNav-li">
        <a href="#what" aria-label="How to play">
          What?
        </a>
      </li>
      <li className="topNav-li">
        <a
          className="new"
          href="#feedback"
          aria-label="Start new game"
          onClick={() => {
            props.dispatch(restartGame());
          }}
        >
          New Game
        </a>
      </li>
    </ul>
  );
}

export default connect()(Nav);
