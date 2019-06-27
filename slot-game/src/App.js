import React from 'react';
import Board from './widgets/Board';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="game-title"> Jackpot</h1>
      <Board />
    </div>
  );
};

export default App;
