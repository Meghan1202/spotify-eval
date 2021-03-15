import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../LandingPage';

describe(LandingPage.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <LandingPage getSongs={jest.fn()} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
