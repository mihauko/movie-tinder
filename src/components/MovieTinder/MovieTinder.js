import React, { useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import AppContext from './context';
import MovieHeader from './MovieHeader';
import MovieImg from './MovieImg';
import MovieDescription from './MovieDescription';
import MovieButtons from './MovieButtons';
import { Root } from './styles';


const MovieTinder = ({ movie }) => {
  const handleAcceptClick = useCallback((id) => {

  }, );
  
  const handleRejectClick = useCallback((id) => {

  }, );
  // useEffect()
  
  return (
    <Root>
     <MovieHeader title={movie.title} rating={movie.rating} />
     <MovieImg title={movie.title} src={movie.imageURL} />
     <MovieDescription summary={movie.summary} />
     <MovieButtons handleAcceptClick={handleAcceptClick} handleRejectClick={handleRejectClick} id={movie.id}/>
    </Root>
  );
};

MovieTinder.propTypes = {

};

export default MovieTinder;