import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import GameSetup from './GameSetup';

$(function() {
  if(document.getElementById('game-setup')) {
    ReactDOM.render(
      <GameSetup />,
      document.getElementById('game-setup')
    );
  }
  else {
    ReactDOM.render(
      <h1>New page!</h1>,
      document.getElementById('app')
    );
  }
});
