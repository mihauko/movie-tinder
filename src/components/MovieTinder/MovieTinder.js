import React from 'react';

import MovieContext from './context';
import MovieHeader from './MovieHeader';
import MovieImg from './MovieImg';
import MovieDescription from './MovieDescription';
import MovieButtons from './MovieButtons';
import MovieSwipeWrapper from './MovieSwipeWrapper';


const MovieTinder = () => (
  <MovieContext.Consumer>
    {({ isLoadingData, filteredMovie, handleClick }) => {
      if (isLoadingData) return <div>Loading data..</div>;
      if (!filteredMovie) return <div>Sorry, there is not data.</div>;
      return (
        <MovieSwipeWrapper handleSwipe={handleClick}>
          <MovieHeader title={filteredMovie.title} rating={filteredMovie.rating} />
          <MovieImg title={filteredMovie.title} src={filteredMovie.imageURL} />
          <MovieDescription summary={filteredMovie.summary} />
          <MovieButtons handleClick={handleClick} />
        </MovieSwipeWrapper>
      );
    }}
  </MovieContext.Consumer>
);

export default MovieTinder;
