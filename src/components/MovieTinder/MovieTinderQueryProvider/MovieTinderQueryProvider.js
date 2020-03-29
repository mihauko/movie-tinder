import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import MovieContext from '../context';
import { RECOMMENDATIONS_URL, buttonActionTypes } from '../../../settings';


const MovieTinderQueryProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoadingData, setLoadingStatus] = useState(false);
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const prevMovieList = usePrevious(moviesList);
  const [filteredMovie, setFilteredMovieList] = useState([]);

  const filterMovies = (list) => {
    const movie = list.find((element) => element.isAccepted === undefined);
    setFilteredMovieList(movie);
  };

  const updateMovie = (updatedMovieData) => {
    const movieId = moviesList.findIndex((movie) => movie.id === updatedMovieData.id);
    moviesList[movieId] = updatedMovieData;
    setMoviesList(moviesList);
    filterMovies(moviesList);
  };

  const handleClick = async (actionType) => {
    try {
      const response = await axios.put(`${RECOMMENDATIONS_URL}${filteredMovie.id}/${actionType}`, {
        ...filteredMovie,
        isAccepted: buttonActionTypes.ACCEPT === actionType,
      });
      updateMovie(response.data);
      console.log(actionType);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(RECOMMENDATIONS_URL);
        if (response) {
          setLoadingStatus(false);
          setMoviesList(response.data);
        }
        console.log('Not yet get response - loading');
      } catch (error) {
        console.error(error);
      }
    };

    if (prevMovieList === undefined) {
      setLoadingStatus(true);
      fetchMovie();
    }
    if (moviesList) {
      filterMovies(moviesList);
    }
  }, [prevMovieList, moviesList]);

  const movieContextData = {
    isLoadingData,
    filteredMovie,
    handleClick,
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
