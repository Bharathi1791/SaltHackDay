import React, { useState } from 'react';
import MovieSearcher from './MovieSearcher';
import './Movie.css';

function ShowMovie(props) {
  return (
    <div> title = {props.title}
    year = {props.year}
    genre = {props.genre}
    language = {props.language}
    poster = <img src={props.poster} alt='imagess'></img>
    runtime = {props.runtime}
    writer = {props.writer}</div>
  );
}

function ReviewMovies() {
  const [movieState, setMovieState] = useState({showLoader: false});
  const handleSearch = event => {
    event.preventDefault();
    const findMovie = document.getElementById('search').value;
    const year = document.getElementById('year').value;
    fetch(`http://www.omdbapi.com/?apikey=fbfcfa6c&t=${findMovie}&y=${year}`)
      .then(data => data.json())
      .then(data =>  setMovieState(data));

  };

  return (
    <div>
      <MovieSearcher handleSearch={handleSearch} />
      <ShowMovie 
        title = {movieState.Title}
        year = {movieState.Year}
        genre = {movieState.Genre}
        language = {movieState.Language}
        poster = {movieState.Poster}
        runtime = {movieState.Runtime}
        writer = {movieState.Writer}
      />
    </div>
  );

}

export default ReviewMovies;