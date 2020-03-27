import React from 'react';
import { render } from '@testing-library/react';

import MovieTinderQueryProvider from '../MovieTinderQueryProvider';
import MovieTinder from '../../MovieTinder';


describe('<MovieTinderQueryProvider>', () => {
  it('display loading data', async () => {
    const container =
      render(
        <MovieTinderQueryProvider>
          <MovieTinder />
        </MovieTinderQueryProvider>
      );
    expect(container).toMatchSnapshot();
  });
  // TODO: handle fetch data
});
