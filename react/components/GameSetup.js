import React from 'react';

const GameSetup = (props) => {
  let playerNameInputs = [];
  for (let i = 0; i < props.numberOfPlayers; i++) {
    playerNameInputs.push(<input type="text" id={`player${i+1}`} />);
  }
  let promptNames;
  if (playerNameInputs.length > 0) {
    promptNames = <label>What are their names?</label>;
  }

  return (
    <div className="game-setup">
      <h2>Welcome to Scrabble!</h2>
      <form>
        <label>How many players do you have?</label>
        <select id="number-players" onChange={props.numberPlayerSelected} value={props.numberOfPlayers}>
          <option value="">Select a number</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {promptNames}
        {playerNameInputs}
        <button className="start-game" onClick={props.startGame}>Start Game</button>
      </form>
    </div>
  );
}

export default GameSetup;
