import React from "react";
import Stats from "./Stats";

export default function Header(props) {
  return (
    <header>
      <Stats players={props.totalPlayers} />
      <h1>{props.title}</h1>
    </header>
  );
}
