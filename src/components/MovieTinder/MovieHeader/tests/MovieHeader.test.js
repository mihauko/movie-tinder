import { render } from '@testing-library/react';
import React from 'react';

import MovieHeader from '../MovieHeader';


describe('<MovieHeader>', () => {
  it('render component correctly', () => {
    const container = render(<MovieHeader title="Title" rating={5.3} />);
    expect(container).toMatchSnapshot();
  });
});
