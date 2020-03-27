import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

import { RECOMMENDATIONS_URL } from '../../../../settings';
import MovieTinderQueryProvider from '../MovieTinderQueryProvider';
import MovieTinder from '../../MovieTinder';


jest.mock('axios');
afterEach(() => jest.resetAllMocks());


describe('<MovieTinderQueryProvider>', () => {
  it('display loading', async () => {
    const { getByText } =
      render(
        <MovieTinderQueryProvider>
          <MovieTinder />
        </MovieTinderQueryProvider>
      );
    expect(getByText(/Loading data../)).toBeInTheDocument();
  });

  it('fetch data from axios', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: '1',
          // eslint-disable-next-line max-len
          imageURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          title: 'Inferno',
          summary: 'Lorem ipsum….',
          rating: 5.3,
        },
      ],
    });

    render(
      <MovieTinderQueryProvider>
        <MovieTinder />
      </MovieTinderQueryProvider>
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(RECOMMENDATIONS_URL);
  });
});
