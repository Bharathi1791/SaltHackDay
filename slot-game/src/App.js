import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Board from './widgets/Board';
import ReviewMovies from './widgets/movie/Movie';
import './App.css';


function Game() {
  return (
    <div>
      <h1 className="game-title"> Jackpot</h1>
      <Board />
    </div>
  );
}

function Movie() {
  return (
      <ReviewMovies />
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/game" component={Game} />
        <Route path="/movie" component={Movie} />
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
