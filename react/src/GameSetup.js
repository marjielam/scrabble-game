import React, { Component } from 'react';

class GameSetup extends Component {
  constructor() {
    super();
    this.state = {
      numPlayers: '',
      playerNameInputs: [],
      promptNames: ''
    };

    this.setNumPlayers = this.setNumPlayers.bind(this);
  }

  setNumPlayers() {
    let numPlayersInput = document.getElementById('number-players');
    let numPlayers = numPlayersInput.value;
    let nameInputs = [];
    for (let i = 0; i < numPlayers; i++) {
      nameInputs.push(<input type="text" id={`player${i+1}`} />);
    }
    this.setState({
      numPlayers: numPlayers,
      playerNameInputs: nameInputs
    });
    if (nameInputs.length > 0) {
      this.setState({ promptNames: 'What are their names?' });
    }

    // let gameData = {
    //     'num_players': numPlayers
    // }
    // let jsonStringData = JSON.stringify(gameData);
    // fetch('/games', {
    //   method: 'post',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: jsonStringData
    // })
    // .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       let errorMessage = `${response.status} (${response.statusText})`,
    //           error = new Error(errorMessage);
    //       throw(error);
    //     }
    //   })
    //   .then(response => {
    //     console.log(numPlayers);
    //   })
    //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  createGame() {

  }

  render() {
    return (
      <div className="game-setup">
        <h2>Welcome to Scrabble!</h2>
        <form>
          <label>How many players do you have?</label>
          <select id="number-players" onChange={() => this.setNumPlayers()} value={this.state.numPlayers}>
            <option value="">Select a number</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <label>{this.state.promptNames}</label>
          {this.state.playerNameInputs}
          <button className="start-game">Start Game</button>
        </form>
      </div>
    );
  }

}

export default GameSetup;
