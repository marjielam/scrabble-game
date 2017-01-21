// import React, { Component } from 'react';
//
// class GameSetup extends Component {
//   constructor() {
//     super();
//     this.state = {
//       gameStarted: false,
//       numPlayers: '',
//       playerNameInputs: [],
//       promptNames: ''
//     };
//
//     this.setNumPlayers = this.setNumPlayers.bind(this);
//     this.createGame = this.createGame.bind(this);
//   }
//
//   setNumPlayers() {
//     let numPlayersInput = document.getElementById('number-players');
//     let numPlayers = numPlayersInput.value;
//     let nameInputs = [];
//     for (let i = 0; i < numPlayers; i++) {
//       nameInputs.push(<input type="text" id={`player${i+1}`} />);
//     }
//     this.setState({
//       numPlayers: numPlayers,
//       playerNameInputs: nameInputs
//     });
//     if (nameInputs.length > 0) {
//       this.setState({ promptNames: 'What are their names?' });
//     }
//
//   }
//
//   createGame() {
//     this.props.startGame();
//     let playerNames = [];
//     for (let i = 0; i < this.state.numPlayers; i++) {
//       playerNames.push(document.getElementById(`player${i+1}`).value);
//     }
//     let gameData = {
//       'game': {
//         'num_players': this.state.numPlayers
//       },
//       'players': playerNames
//     }
//     let jsonStringData = JSON.stringify(gameData);
//     fetch('/games', {
//       method: 'post',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: jsonStringData
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//               error = new Error(errorMessage);
//           throw(error);
//         }
//       })
//     .then(response => {
//       this.setState({ gameStarted: true })
//
//     })
//     .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
//
//   render() {
//     if (this.state.gameStarted) {
//       return(
//         <h1>Game start!</h1>
//       );
//     } else {
//       return (
//         <div className="game-setup">
//           <h2>Welcome to Scrabble!</h2>
//           <form>
//             <label>How many players do you have?</label><br />
//             <select id="number-players" onChange={() => this.setNumPlayers()}
//               value={this.state.numPlayers} >
//               <option value="">Select a number</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select><br />
//             <label>{this.state.promptNames}</label><br />
//             {this.state.playerNameInputs}
//             <button className="start-game" onClick={() => this.createGame()} >
//               Start Game
//             </button>
//           </form>
//         </div>
//       );
//     }
//   }
// }
//
// export default GameSetup;
