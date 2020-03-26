import React from 'react';
import PropTypes from 'prop-types';

import { ImgWrapper, Img } from './styles';


const MovieImg = ({ src, title }) => {
  return (
    <ImgWrapper>
      <Img src={src} alt={title} title={title} />
    </ImgWrapper>
  );
};

MovieImg.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default MovieImg;