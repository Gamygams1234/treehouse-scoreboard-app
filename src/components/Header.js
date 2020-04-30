import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

export default function Header(props) {
  return (
    <header>
      <Stats players={props.totalPlayers} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
}
