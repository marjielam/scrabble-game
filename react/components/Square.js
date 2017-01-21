import React from 'react';
import Piece from './Piece';

const Square = (props) => {
  if (props.value === '') {
    return (
      <td className="square" onClick={() => props.placePiece(props.rowIndex, props.columnIndex)}>
      </td>
    );
  } else {
    return (
      <td className="square" onClick={() => props.placePiece(props.rowIndex, props.columnIndex)}>
      <Piece
        letter={props.value.letter}
        value={props.value.value}
      />
      </td>
    );
  }
}

export default Square;
