import React from "react";

export default function Stats({ players }) {
  const totalPoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{players.length}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}
