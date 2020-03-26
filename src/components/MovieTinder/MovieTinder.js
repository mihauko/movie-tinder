import React, { useCallback, useEffect, useState} from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import MovieContext from './context';
import MovieHeader from './MovieHeader';
import MovieImg from './MovieImg';
import MovieDescription from './MovieDescription';
import MovieButtons from './MovieButtons';
import { Root } from './styles';


const MovieTinder = () => {
  //  useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:3001/data/');
  //       setMovieList(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //
  //   const filterMovies = (list) => {
  //     const movie = list.find((element) => element.id);
  //     setFilteredMovieList(movie);
  //   };
  //   if (prevMovieList === undefined) {
  //     fetchMovie();
  //   }
  //   filterMovies(movieList);
  // });
  // const handleAcceptClick = useCallback((id) => {
  //
  // }, );
  //
  // const handleRejectClick = useCallback((id) => {
  //
  // }, );
  // useEffect()
  
  return (
    <MovieContext.Consumer>
      {({ filteredMovie, updateMovie }) => {
        if (!filteredMovie) return <div>Loading data..</div>
        return (
          <Root>
            <MovieHeader title={filteredMovie.title} rating={filteredMovie.rating} />
            <MovieImg title={filteredMovie.title} src={filteredMovie.imageURL} />
            <MovieDescription summary={filteredMovie.summary} />
            <MovieButtons filteredMovie={filteredMovie} updateMovie={updateMovie} />
          </Root>
        );
      }}
    </MovieContext.Consumer>
  );
};

MovieTinder.propTypes = {

};

export default MovieTinder;