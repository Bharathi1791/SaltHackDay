import React from 'react';

function MovieSearcher(props) {
  return (
  <div className="search-form">
    <form onSubmit={props.handleSearch}>
    <label className="input-text">
      Movie Name
      <input className="search-text" type="text" name="name" id='search' />
    </label>
   
    <label className="input-text">
      Movie Year
      <input className="date-text"type="text" name="year" id='year' />
    </label>
    <input className='submit' type="submit" value="Submit" />
    </form>
  </div>
  );
}

export default MovieSearcher;