import React from 'react';
import { render } from '@testing-library/react';
import GenreViewPage from '../GenreViewPage';

describe(GenreViewPage.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<GenreViewPage />);
    expect(container).toMatchSnapshot();
  });
});
