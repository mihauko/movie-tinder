import React from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

import { buttonActionTypes } from '../../../settings';
import { Root } from './styles';


const MovieSwipeWrapper = ({ children, handleSwipe }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(buttonActionTypes.REJECT),
    onSwipedRight: () => handleSwipe(buttonActionTypes.REJECT),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Root {...handlers}>
      {children}
    </Root>
  );
};

MovieSwipeWrapper.propTypes = {
  children: PropTypes.node,
  handleSwipe: PropTypes.func,
};

export default MovieSwipeWrapper;
