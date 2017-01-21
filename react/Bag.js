import Piece from './Piece';

class Bag {
  constructor() {
    this.pieces = [];
    let i;
    for (i = 0; i < 12; i++) {
      this.pieces.push(new Piece('E', 1, this.pieces.length));
    }
    for (i = 0; i < 9; i++) {
      this.pieces.push(new Piece('A', 1, this.pieces.length));
      this.pieces.push(new Piece('I', 1, this.pieces.length));
    }
    for (i = 0; i < 8; i++) {
      this.pieces.push(new Piece('O', 1, this.pieces.length));
    }
    for (i = 0; i < 6; i++) {
      this.pieces.push(new Piece('N', 1, this.pieces.length));
      this.pieces.push(new Piece('R', 1, this.pieces.length));
      this.pieces.push(new Piece('T', 1, this.pieces.length));
    }
    for (i = 0; i < 4; i++) {
      this.pieces.push(new Piece('L', 1, this.pieces.length));
      this.pieces.push(new Piece('S', 1, this.pieces.length));
      this.pieces.push(new Piece('U', 1, this.pieces.length));
      this.pieces.push(new Piece('D', 2, this.pieces.length));
    }
    for (i = 0; i < 3; i++) {
      this.pieces.push(new Piece('G', 2, this.pieces.length));
    }
    for (i = 0; i < 2; i++) {
      this.pieces.push(new Piece('', 0, this.pieces.length));
      this.pieces.push(new Piece('B', 3, this.pieces.length));
      this.pieces.push(new Piece('C', 3, this.pieces.length));
      this.pieces.push(new Piece('M', 3, this.pieces.length));
      this.pieces.push(new Piece('P', 3, this.pieces.length));
      this.pieces.push(new Piece('F', 4, this.pieces.length));
      this.pieces.push(new Piece('H', 4, this.pieces.length));
      this.pieces.push(new Piece('V', 4, this.pieces.length));
      this.pieces.push(new Piece('W', 4, this.pieces.length));
      this.pieces.push(new Piece('Y', 4, this.pieces.length));
    }
    this.pieces.push(new Piece('K', 5, this.pieces.length));
    this.pieces.push(new Piece('J', 8, this.pieces.length));
    this.pieces.push(new Piece('X', 8, this.pieces.length));
    this.pieces.push(new Piece('Q', 10, this.pieces.length));
    this.pieces.push(new Piece('Z', 10, this.pieces.length));
  }

  drawPieces(int) {
    let drawnPieces = [];
    let i;
    for (i = 0; i < int; i++) {
      let random = Math.floor((Math.random() * this.pieces.length));
      drawnPieces.push(this.pieces.splice(random, 1)[0]);
    }
    return drawnPieces;
  }

  empty() {
    if (this.pieces.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  remainingPieces() {
    return this.pieces.length;
  }
}

module.exports = Bag;
