import React from 'react';
import PropTypes from 'prop-types';

import { BackgroundImage } from './styles';


const MovieImg = ({ src, title }) => (
  <BackgroundImage src={src} title={title} />
);

MovieImg.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default MovieImg;
