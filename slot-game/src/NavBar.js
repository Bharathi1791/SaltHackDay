import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li  className="nav-item">
          <Link to="/game">Game</Link>
        </li>
        <li className="nav-item">
          <Link to="/movie">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;