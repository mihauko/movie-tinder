import React from 'react';
import PropTypes from 'prop-types';

import { Root } from './styles';


const MovieDescription = ({ summary }) => (
  <Root>
    {summary}
  </Root>
);

MovieDescription.propTypes = {
  summary: PropTypes.string,
};

export default MovieDescription;
