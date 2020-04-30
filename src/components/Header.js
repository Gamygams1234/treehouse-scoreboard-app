import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

export default function Header(props) {
  // we can destructure like this for our props
  const { totalPlayers, title } = props;
  return (
    <header>
      <Stats players={totalPlayers} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}
