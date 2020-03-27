import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


describe('<App>', () => {
  it('render component correctly', () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
