import React from 'react';
import PropTypes from 'prop-types';

import AppContext from '../context';
import { Root } from './styles';


const MovieDescription = ({ summary }) => {
  return (
    <Root>
      {summary}
    </Root>
  );
};

MovieDescription.propTypes = {

};

export default MovieDescription;