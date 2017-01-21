class BoardState {
  constructor() {
    this.grid = new Array(15);
    for (let i = 0; i < 15; i++) {
      this.grid[i] = new Array(15).fill('');
    }
  }
}

module.exports = BoardState;
