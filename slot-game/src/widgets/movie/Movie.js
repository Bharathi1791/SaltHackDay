import React, { useState } from 'react';
import MovieSearcher from './MovieSearcher';
import './Movie.css';

function ShowMovie(props) {
  return (
    <div>
      <div className="movie-content">
        <div><span>Title:</span> {props.title} </div>
        <div><span>Year: </span> {props.year}</div>
        <div><span>Type: </span> {props.type}</div>
        <div><span>Actors: </span> {props.actors}</div>
        <div><span>Genre: </span> {props.genre}</div>
        <div><span>Language: </span> {props.language}</div>
        <div><span>Rating: </span> {props.imdbRating}</div>
        <div><span>Country: </span> {props.country}</div>
        <div><span>Plot: </span> {props.plot}</div>
      </div>
      <div className="movie-poster">
        <div><img className="poster-image" src={props.poster} alt="Poster"></img></div>
      </div>
    </div>
  );
}

function ReviewMovies() {

  const [movieState, setMovieState] = useState({title: false, message:''});
  
  const handleSearch = event => {
    event.preventDefault();
    const findMovie = document.getElementById('search').value;
    const year = document.getElementById('year').value;
    fetch(`http://www.omdbapi.com/?apikey=fbfcfa6c&t=${findMovie}&y=${year}`)
      .then(data => data.json())
      .then(data =>  setMovieState(data));
  };
  
  if (movieState.Response === 'False') {
    movieState.title = false;
    movieState.message = 'No Movie Found';
  }

  return (
    <div>
     <h1 className="movie-title">Movie Reviews</h1>
     <div className="show-movie">
     <MovieSearcher handleSearch={handleSearch}  />
     {movieState.title === false ? <div className="movie-content">{movieState.message}</div> : 
      <ShowMovie 
        title = {movieState.Title}
        year = {movieState.Year}
        genre = {movieState.Genre}
        actors = {movieState.Actors}
        language = {movieState.Language}
        plot = {movieState.Plot}
        poster = {movieState.Poster}
        imdbRating = {movieState.imdbRating}
        country = {movieState.Country}
        type = {movieState.Type}

      />}
      </div>
    </div>
  );

}

export default ReviewMovies;