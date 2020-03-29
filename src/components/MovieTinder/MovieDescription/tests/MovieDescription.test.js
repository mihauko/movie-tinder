import { render } from '@testing-library/react';
import React from 'react';

import MovieDescription from '../MovieDescription';


describe('<MovieDescription>', () => {
  it('render component correctly', () => {
    const container = render(<MovieDescription summary="Description text" />);
    expect(container.container).toMatchSnapshot();
  });
});
