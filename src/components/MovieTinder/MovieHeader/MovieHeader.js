import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';


const MovieHeader = ({ title, rating }) => (
  <Root>
    {`${title} ${rating}/10`}
  </Root>
);


MovieHeader.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieHeader;
