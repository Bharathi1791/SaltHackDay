import React from 'react';

function MovieSearcher(props) {
  return (
    <form onSubmit={props.handleSearch}>
    <label>
      Enter Movie Name:
      <input type="text" name="name" id='search' />
    </label>
    <label>
      Enter Movie year:
      <input type="text" name="year" id='year' />
    </label>
    <input className='submit' type="submit" value="Submit" />
  </form>
  );
}

export default MovieSearcher;