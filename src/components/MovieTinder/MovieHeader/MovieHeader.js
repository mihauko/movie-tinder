import React from 'react';
import PropTypes from 'prop-types';

import AppContext from '../context';
import { Root } from './styles';


const MovieHeader = ({ title, rating }) => {
  return (
    <Root>
      {`${title} ${rating}/10`}
    </Root>
  );
};

MovieHeader.propTypes = {

};

export default MovieHeader;