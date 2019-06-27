import React from 'react';
import Board from './widgets/Board';
// import Movie from './widgets/movie/Movie';
import './App.css';

function Game() {
  return (
    <div>
      <h1 className="game-title"> Jackpot</h1>
      <Board />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
