import React from 'react';

const GameOver = (props) => {
  let winner;
  let tie;
  let highestScore = 0;
  props.players.forEach(function (player) {
    if (player.points > highestScore) {
      highestScore = player.points;
      winner = player;
    }
    else if (player.points == highestScore) {
      tie = player;
    }
  });
  let result = `${winner.name} wins!`

  let players = props.players.map((player) => {
    return (
      <li>{player.name}: {player.points}</li>
    );
  });
  return (
    <div class="game-over">
      <h2>Game Over!</h2>
      <p>{winner.name} wins!</p>
      <h4>Final Scores</h4>
      <ul>{players}</ul>
    </div>
  );
}

export default GameOver;
