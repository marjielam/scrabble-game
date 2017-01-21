import React from 'react';

const GameOver = (props) => {
  let winner;
  let tie = [];
  let highestScore = 0;
  let result;
  props.players.forEach(function (player) {
    if (player.points > highestScore) {
      debugger;
      highestScore = player.points;
      winner = player;
      tie = [];
    }
    else if (player.points == highestScore) {
      debugger;
      tie.push(player.name);
    }
  });
  if (tie.length > 0) {
    let names = tie.slice(0, tie.length - 1).join(', ') + ', and ' + tie.slice(-1);
    result = `${names} tied!`;
    debugger;
  }
  else {
    result = `${winner.name} wins!`;
    debugger;
  }

  let players = props.players.map((player) => {
    return (
      <li>{player.name}: {player.points}</li>
    );
  });
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>{result}</p>
      <h4>Final Scores</h4>
      <ul>{players}</ul>
    </div>
  );
}

export default GameOver;
