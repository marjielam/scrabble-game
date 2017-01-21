import Bag from './Bag';

class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.points = 0;
    this.pieces = [];
  }

  drawPieces(number, bag) {
    this.pieces = this.pieces.concat(bag.drawPieces(number));
  }

  placePiece(pieceId) {
    for (let i = 0; i < this.pieces.length; i++) {
      if (this.pieces[i].id === pieceId) {
        this.pieces.splice(i, 1);
      }
    }
  }
}

module.exports = Player;
