import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { buttonActionTypes } from '../../../../settings';
import MovieButtons from '../MovieButtons';


const handleClick = jest.fn();
let getByText;
let utils;
beforeEach(() => {
  utils = render(
    <MovieButtons handleClick={handleClick} />
  );
  getByText = utils.getByText;
});

describe('<MovieButtons>', () => {
  it('render component correctly', () => {
    expect(utils).toMatchSnapshot();
  });
  it('invoke accept method on click', () => {
    const acceptButton = getByText('Accept');
    fireEvent.click(acceptButton, handleClick);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(buttonActionTypes.ACCEPT);
  });

  it('invoke reject method on click', () => {
    const acceptButton = getByText('Reject');
    fireEvent.click(acceptButton, handleClick);

    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(handleClick).toHaveBeenCalledWith(buttonActionTypes.REJECT);
  });
});
