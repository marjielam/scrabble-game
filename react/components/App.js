import React, { Component } from 'react';
import GameSetup from './GameSetup';
import Player from '../Player';
import Piece from '../Piece';
import Bag from '../Bag';
import Board from './Board';
import BoardState from '../BoardState';
import Dashboard from './Dashboard';
import GameOver from './GameOver';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameStarted: false,
      numberOfPlayers: 0,
      players: [],
      bag: null,
      boardState: null,
      currentPlayer: null,
      selectedPiece: null,
      currentScore: 0,
      gameOver: false
    };

    this.startGame = this.startGame.bind(this);
    this.numberPlayerSelected = this.numberPlayerSelected.bind(this);
    this.choosePiece = this.choosePiece.bind(this);
    this.placePiece = this.placePiece.bind(this);
    this.advanceTurn = this.advanceTurn.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  startGame(event) {
    event.preventDefault();
    if (!(this.state.numberOfPlayers >= 2 && this.state.numberOfPlayers <= 4)) {
      alert('Please select a number of players between 2 and 4.');
    } else {
      let bag = new Bag();
      let board = new BoardState();
      let players = [];
      for (let i = 1; i <= this.state.numberOfPlayers; i++) {
        let name = document.getElementById(`player${i}`).value;
        let player = new Player(i, name);
        player.drawPieces(7, bag);
        players.push(player);
      }
      this.setState({
        gameStarted: true,
        players: players,
        bag: bag,
        boardState: board,
        currentPlayer: players[0]
      });
    }
  }

  numberPlayerSelected(event) {
    event.preventDefault();
    let numberPlayersInput = document.getElementById("number-players");
    let numberOfPlayers = numberPlayersInput.value;
    this.setState({
      numberOfPlayers: numberOfPlayers
    });
  }

  choosePiece(piece) {
    this.setState({
      selectedPiece: piece
    });
  }

  placePiece(rowIndex, columnIndex) {
    let newBoard = this.state.boardState;
    newBoard.grid[rowIndex][columnIndex] = this.state.selectedPiece;
    this.state.currentPlayer.placePiece(this.state.selectedPiece.id);
    let currentScore = this.calculateCurrentScore(rowIndex, columnIndex, newBoard);
    this.setState({
      boardState: newBoard,
      selectedPiece: null,
      currentScore: currentScore
    });
  }

  calculateCurrentScore(rowIndex, columnIndex, board) {
    let currentScore = board.grid[rowIndex][columnIndex].value;
    let row = rowIndex;
    let column = columnIndex;

    row = rowIndex - 1;
    while(row >= 0) {
      if (board.grid[row][column] != '') {
        currentScore += board.grid[row][column].value;
      }
      else {
        break;
      }
      row--;
    }

    row = rowIndex + 1;
    while(row < 15) {
      if (board.grid[row][column] != '') {
        currentScore += board.grid[row][column].value;
      }
      else {
        break;
      }
      row++;
    }

    row = rowIndex;
    column = columnIndex - 1;
    while(column >= 0) {
      if (board.grid[row][column] != '') {
        currentScore += board.grid[row][column].value;
      }
      else {
        break;
      }
      column--;
    }

    column = columnIndex + 1;
    while(column < 15) {
      if (board.grid[row][column] != '') {
        currentScore += board.grid[row][column].value;
      }
      else {
        break;
      }
      column++;
    }
    return currentScore;
  }

  advanceTurn() {
    this.state.currentPlayer.points += this.state.currentScore;
    let piecesNeeded = 7 - this.state.currentPlayer.pieces.length;
    let remainingPieces = this.state.bag.remainingPieces();

    if (this.state.bag.empty() && this.state.currentPlayer.pieces.length == 0) {
      this.setState({ gameOver: true });
      return;
    }
    else if (!this.state.bag.empty() && remainingPieces >= piecesNeeded) {
      this.state.currentPlayer.drawPieces(piecesNeeded, this.state.bag);
    } else if (!this.state.bag.empty()) {
      this.state.currentPlayer.drawPieces(remainingPieces, this.state.bag);
    }

    let newPlayerIndex = this.state.players.indexOf(this.state.currentPlayer) + 1;
    if (newPlayerIndex === this.state.players.length) {
      this.setState({
        currentPlayer: this.state.players[0],
        currentScore: 0
      });
    } else {
      this.setState({
        currentPlayer: this.state.players[newPlayerIndex],
        currentScore: 0
      });
    }
  }

  endGame() {
    this.setState({ gameOver: true });
  }

  render() {
    if (this.state.gameOver) {
      return (
        <GameOver
        players={this.state.players}
        />
      );
    } else if (this.state.gameStarted) {
      return (
        <div>
          <Dashboard
            allPlayers={this.state.players}
            player={this.state.currentPlayer}
            currentScore={this.state.currentScore}
            selectedPiece={this.state.selectedPiece}
            choosePiece={this.choosePiece}
            advanceTurn={this.advanceTurn}
            endGame={this.endGame}
          />
          <Board
            boardState = {this.state.boardState}
            placePiece={this.placePiece}
          />
        </div>
      );
    } else {
      return (
        <GameSetup
          startGame={this.startGame}
          numberPlayerSelected={this.numberPlayerSelected}
          numberOfPlayers={this.state.numberOfPlayers}
        />
      );
    }
  }
}

export default App;
