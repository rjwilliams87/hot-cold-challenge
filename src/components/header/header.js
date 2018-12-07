import React from "react";
import Nav from "../nav/nav.js";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <Nav restartGame={() => props.restartGame()} />
      <h1>HOT or COLD</h1>
    </header>
  );
}
