import { render } from '@testing-library/react';
import React from 'react';

import MovieImg from '../MovieImg';


describe('<MovieImg>', () => {
  it('render component correctly', () => {
    const container = render(<MovieImg src="/url/path.jpg" title="Image" />);
    expect(container).toMatchSnapshot();
  });
});
