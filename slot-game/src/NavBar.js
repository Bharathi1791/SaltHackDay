import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <li  className="nav-item">
          <Link to="/"> &nbsp;Play</Link>
        </li>
        <li className="nav-item">
          <Link to="/movie">&nbsp;&nbsp;&nbsp;Movie Review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;