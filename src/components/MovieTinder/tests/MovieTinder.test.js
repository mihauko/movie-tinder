import React from 'react';
import { render } from '@testing-library/react';
import MovieContext from '../context';

import MovieTinder from '../MovieTinder';


describe('<MovieTinder>', () => {
  const mockedContext = {
    filteredMovie: {
      id: '1',
      // eslint-disable-next-line max-len
      imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Inferno',
      summary: 'Lorem ipsum….',
      rating: 5.3,
    },
    handleClick: jest.fn(),
  };

  it('render correctly component', () => {
    const container = render(
      <MovieContext.Provider value={mockedContext}>
        <MovieTinder />
      </MovieContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
