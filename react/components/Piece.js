import React from 'react';

const Piece = (props) => {
  let letter;
  if (props.letter === '') {
    letter = ' ';
  } else {
    letter = props.letter;
  }
  return (
    <div className="piece">
      <h3>{letter}</h3><h6>{props.value}</h6>
    </div>
  );
}

export default Piece;
