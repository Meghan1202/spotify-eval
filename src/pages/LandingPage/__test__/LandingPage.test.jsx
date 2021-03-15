import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../LandingPage';

describe(LandingPage.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
  });
});