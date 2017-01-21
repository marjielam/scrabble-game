import React from 'react';
import Square from './Square';

const Board = (props) => {
  let keyCounter = -1;
  let rowIndex = -1;
  let columnIndex = -1;
  let rows = props.boardState.grid.map(row => {
    rowIndex++;
    let columns = row.map(column => {
      columnIndex++;
      keyCounter++;
      return (
        <Square
          key={keyCounter}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          placePiece={props.placePiece}
          value={column}
        />
      );
    });
    columnIndex = -1;
    return (
      <tr>{columns}</tr>
    );
  });
  return (
      <div className="board small-8 columns">
        <table>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
  );
}

export default Board;
