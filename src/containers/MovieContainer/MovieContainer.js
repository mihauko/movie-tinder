import React from 'react';

import MovieTinder from '../../components/MovieTinder';
import MovieTinderQueryProvider from '../../components/MovieTinder/MovieTinderQueryProvider';


const MovieContainer = () => (
  <MovieTinderQueryProvider>
    <MovieTinder />
  </MovieTinderQueryProvider>
);


MovieContainer.propTypes = {

};

export default MovieContainer;
