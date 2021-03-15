import React from 'react';
import { render } from '@testing-library/react';
import GenreHeader from '../GenreHeader';

describe(GenreHeader.name, () => {
  it('should match the snapshot', () => {
    const { container } = render(<GenreHeader />);
    expect(container).toMatchSnapshot();
  });
});
