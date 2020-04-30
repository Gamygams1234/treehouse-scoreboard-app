import React from "react";
import Stats from "./Stats";
import PropTypes from "prop-types";
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
Header.propTypes = {
  title: PropTypes.string,
  totalPlayers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Header.defaultProps = {
  title: "Scoreboard",
};
