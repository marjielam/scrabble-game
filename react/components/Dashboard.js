import React from 'react';
import Piece from './Piece';

const Dashboard = (props) => {
  let pieces = props.player.pieces.map(piece => {
    let selected;
    if (piece === props.selectedPiece) {
      selected = 'selected';
    }
    return (
      <td className={`dashboard-piece ${selected}`} onClick={() => props.choosePiece(piece)}>
        <Piece
          key={piece.id}
          letter={piece.letter}
          value={piece.value}
        />
      </td>
    );
  });

  let scores = props.allPlayers.map(player => {
    return (
      <li>{player.name}: {player.points}</li>
    );
  });

  return (
    <div className="dashboard small-4 columns">
      <h2>Current Player: {props.player.name}</h2>
      <h4>Previous points: {props.player.points}</h4>
      <h4>Points this turn: {props.currentScore}</h4>
      <table>
        <tbody>
          <tr>{pieces}</tr>
        </tbody>
      </table>
      <button className="next" onClick={() => props.advanceTurn()}>Next turn</button>
      <br/>
      <div className="scores">
        <h5>Current Scores</h5>
        <ul>{scores}</ul>
      </div>
      <button className="end-game" onClick={() => props.endGame()}>Game Over</button>
    </div>
  );
}

export default Dashboard;
