import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { buttonActionTypes } from '../../../../settings';
import MovieSwipeWrapper from '../MovieSwipeWrapper';
import {
  createStartTouchEventObject,
  createMoveTouchEventObject,
} from '../../../../tests/helpers';


const handleSwipe = jest.fn();

describe('<MovieSwipeWrapper>', () => {
  it.skip('invoke swipe method', () => {
    const { getByRole } = render(<MovieSwipeWrapper handleSwipe={handleSwipe} />);

    const swipe = getByRole('article');
    fireEvent.touchStart(swipe,
      createStartTouchEventObject({ x: 100, y: 0 }));
    fireEvent.touchMove(swipe,
      createMoveTouchEventObject({ x: 150, y: 0 }));
    fireEvent.touchEnd(swipe,
      createMoveTouchEventObject({ x: 200, y: 0 }));

    expect(handleSwipe).toHaveBeenCalledTimes(1);
    expect(handleSwipe).toHaveBeenCalledWith(buttonActionTypes.REJECT);
  });
});
