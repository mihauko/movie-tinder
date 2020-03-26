import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import MovieContext from '../context';


const URL = 'http://127.0.0.1:3001/recommendations/';

const MovieTinderQueryProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const prevMovieList = usePrevious(moviesList);
  const [filteredMovie, setFilteredMovieList] = useState([]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function filterMovies(list) {
    const movie = list.find((element) => element.isAccepted === undefined);
    setFilteredMovieList(movie);
  }

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(URL);
        setMoviesList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (prevMovieList === undefined) {
      fetchMovie();
    }
    filterMovies(moviesList);
  });

  function updateMovie(updatedMovie) {
    const movieId = moviesList.findIndex((movie) => movie.id === updatedMovie.id);
    moviesList[movieId] = updatedMovie;
    console.log(moviesList);
    setMoviesList(moviesList);
    filterMovies(moviesList);
  }

  // const { data, loading, error } = queryData;
  const movieContextData = {
    filteredMovie,
    updateMovie,
  };
  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};

MovieTinderQueryProvider.propTypes = {
  children: PropTypes.node,
};

export default MovieTinderQueryProvider;
