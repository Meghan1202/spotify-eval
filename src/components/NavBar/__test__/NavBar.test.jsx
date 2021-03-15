import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';

describe(NavBar.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
